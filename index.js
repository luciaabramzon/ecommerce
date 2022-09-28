const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser: true, useUnifiedTopology:true}
const passport=require('passport')
const LocalStrategy=require('passport-local')
const User=require('./user.schema')
const {comparePassword, hashPassword}=require('./utils')
const {authMiddleware, authenticate}=require('./middleware')
const {Types}=require('mongoose')
const {connect}=require('./database');


connect()

 passport.use("login", new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ username });
  if(!user){
    return done(null, null, { message: "Invalid username or password" });
  }
  const passHash = user.password;
  if ( !comparePassword(password, passHash)) {
    return done(null, null, { message: "Invalid username or password" })
  } else{
    return done(null, user);
  }
}))


passport.use("signup", new LocalStrategy({
  passReqToCallback: true
}, async (req, username, password, done) => {
  const user = await User.findOne({ username });
  if (user) {   
 return done(null, null);   

  }
  const hashedPassword = hashPassword(password);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  return done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  id = Types.ObjectId(id);
  const user = await User.findById(id);
  done(null, user);
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ 
  store:MongoStore.create({
    mongoUrl:"mongodb://localhost:27017/users",
   mongoOptions:advancedOptions,
   ttl:60*10
  }),
  secret:'SECRET_PASSWORD',
  resave:false,
  saveUninitialized:true,
}));

app.use(passport.initialize())
app.use(passport.session())


app.post("/signup", passport.authenticate("signup", {
  failureRedirect: "/failSignUp.html",
}) , (req, res) => {  
  req.session.user = req.user;
  res.redirect("/dashboard.html");
});

app.post("/login", passport.authenticate("login", {
  failureRedirect: "/failLogin.html",
}) ,(req, res) => {
    req.session.user = req.user;
    res.redirect('/dashboard.html');
});

const MAX_IDLE_TIME = 10; // segundos


app.use((req, res, next) => {
  const diff = Date.now() - req.session.ultimaActualizacion;
  console.log(diff);
  if (req.session.user && diff > MAX_IDLE_TIME * 1000) {
    res.redirect('/login.html')
    return;
  }
  next();
});

// Refresh session timeout
app.use((req, res, next) => {
  if (!req.session.ultimaActualizacion && req.session.user) {
    req.session.ultimaActualizacion = Date.now(); 
    next();
    return;
  }

  const diff = Date.now() - req.session.ultimaActualizacion;
  if (req.session.user && diff < MAX_IDLE_TIME * 1000) {
    req.session.ultimaActualizacion = Date.now();
    next();
    return;
  }
  next();
});

app.get("/api/dashboard",authMiddleware, (req, res) => {
 let user=req.user
  res.json({ status: "ok", user: req.session.user});
  return 
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});


app.post("/api/logout", (req, res) => {
  req.session.destroy();
  res.json({ status: "ok" });
})

app.get('/logout',(req,res)=>{
  res.sendFile(__dirname + "/public/logout.html");
})

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});