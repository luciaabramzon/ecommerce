const express = require("express");
const compression=require('compression')
const gzipMiddleware=compression()
const app = express();
const PORT = 8000;
const session = require("express-session");
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser: true, useUnifiedTopology:false,family:4}
const passport=require('passport')
const authMiddleware=require('./utils/middleware/middleware')
const hbs=require('./handlebars.engine')
const routeRandom=require('./routes/random.js')
const {connect}=require('./utils/mongo/database');
require('./utils/passport/passport')
const dotenv=require('dotenv')
dotenv.config()
connect() 

require('./log4js')
const log4js=require('log4js')
const logger=log4js.getLogger()

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


const cluster=require('cluster')
const numCpus=require('os').cpus().length


 if(cluster.isMaster){
  console.log('numCpus',numCpus)
  for (let i=0 ; i<numCpus; i++ ){
    cluster.fork()
  }
  cluster.on('exit',()=>{
    console.log(`worker died ${process.pid}`)
    cluster.fork()
  })
}else{
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
    failureRedirect: "/failSignUp.html",
  }) , (req, res) => {  
    req.session.user = req.user;
    res.redirect("/profile");
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

  app.get('/infozip',gzipMiddleware,(req,res)=>{
    res.render(__dirname+'/views/pages/info',{objeto:objeto})
  })
  

  app.get('/info',(req,res)=>{
    logger.log('info','operacion exitosa') 
    res.render(__dirname+'/views/pages/info',{objeto:objeto})
  })


    app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.json({ status: "ok" });
  })
  
  app.get('/logout',(req,res)=>{
    res.render(__dirname + "/views/pages/logout", {status:'ok', user: req.session.user});
  })
  
    
  app.get('*',(req,res)=>{
    logger.log('warn',`Ruta no encontrada ${req.url}`)
    res.status(400).send(`Ruta no encontrada ${req.url}`)
  })
  
const p=require('./utils/functions/minimist')

/* app.listen(p.p ||8080, () => {
  console.log(`⚡ Server listening :: http://localhost:${p.p} procesador: ${process.pid}`);
});
}   */

app.listen(process.env.PORT||8000, () => {
  console.log(`⚡ Server listening :: http://localhost:${process.env.PORT} procesador: ${process.pid}`);
});
}  
