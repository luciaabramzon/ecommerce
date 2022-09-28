const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser: true, useUnifiedTopology:true}
const passport=require('passport')
const authMiddleware=require('./middleware')
const hbs=require('./handlebars.engine')

const {connect}=require('./database');
require('./passport')

connect()

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/pages");

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

const MAX_IDLE_TIME = 10; // segundos

// Idle session timeout middleware
app.use((req, res, next) => {
  const diff = Date.now() - req.session.ultimaActualizacion; // Diferencia entre la ultima actualizacion y el momento actual
  console.log(diff);
  if (req.session.user && diff > MAX_IDLE_TIME * 1000) {
    req.session.destroy();
    res.redirect('/login');
    return;
  }
  next();
});

// Refresh session timeout
app.use((req, res, next) => {
  if (!req.session.ultimaActualizacion && req.session.user) {
    req.session.ultimaActualizacion = Date.now(); // Timestamp de la ultima actualizacion
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

// Se agregan los middlewares de passport para manejar el login y el signup

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

// El manejo de errores es automatico y en caso de fallo se redirige a la ruta 
// correpondiente

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.get("/profile", authMiddleware,(req, res) => {
  res.render(__dirname + "/views/pages/profile", {status:'ok', user: req.session.user});
});

app.post("/api/logout", (req, res) => {
  req.session.destroy();
  res.json({ status: "ok" });
})

app.get('/logout',(req,res)=>{
  res.render(__dirname + "/views/pages/logout", {status:'ok', user: req.session.user});
})

app.listen(PORT, () => {
  console.log(`⚡ Server listening :: http://localhost:${PORT}`);
});