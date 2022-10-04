const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser: true, useUnifiedTopology:true}
const passport=require('passport')
const authMiddleware=require('./utils/middleware/middleware')
const hbs=require('./handlebars.engine')
const routeRandom=require('./routes/random.js')
const {connect}=require('./utils/mongo/database');
require('./utils/passport/passport')
const dotenv=require('dotenv')
dotenv.config()
connect()

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/pages");

app.use(session({ 
  store:MongoStore.create({
    mongoUrl:process.env.mongo_connect,
   mongoOptions:advancedOptions,
   ttl:60*10
  }),
  secret:'SECRET_PASSWORD',
  resave:false,
  saveUninitialized:true,
}));

app.use(passport.initialize())
app.use(passport.session())
app.use('/api',routeRandom) 

const MAX_IDLE_TIME = 10;
app.use((req, res, next) => {
  const diff = Date.now() - req.session.ultimaActualizacion; 
  if (req.session.user && diff > MAX_IDLE_TIME * 1000) {
    req.session.destroy();
    res.redirect('/login');
    return;
  }
  next();
});

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


app.get("/", (req, res) => {
  res.redirect('/profile');
});


app.post("/signup", passport.authenticate("signup", {
  failureRedirect: "/failSignUp.html",
}) , (req, res) => {  
  req.session.user = req.user;
  res.redirect("/profile");
});

app.post("/login", passport.authenticate("login", {
  failureRedirect: "/failLogin.html",
}) ,(req, res) => {
    req.session.user = req.user;
    res.redirect('/profile');
});


app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.get("/profile", authMiddleware,(req, res) => {
  res.render(__dirname + "/views/pages/profile", {status:'ok', user: req.session.user});
});

const objeto=require('./process')
app.get('/info',(req,res)=>{
  res.render(__dirname+'/views/pages/info',{objeto:objeto})
})

app.post("/api/logout", (req, res) => {
  req.session.destroy();
  res.json({ status: "ok" });
})

app.get('/logout',(req,res)=>{
  res.render(__dirname + "/views/pages/logout", {status:'ok', user: req.session.user});
})

const p=require('./utils/functions/minimist')

app.listen(p.p, () => {
  console.log(`⚡ Server listening :: http://localhost:${p.p}`);
});