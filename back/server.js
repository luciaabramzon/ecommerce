const express=require('express')
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 8080;
const passport=require('passport')

const session = require("express-session");
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser: true, useUnifiedTopology:false,family:4}
const hbs=require('./handlebars.engine')
const {connect}=require('./src/daos/mongo/database');

const product=require('./src/routes/productos')
const cart=require('./src/routes/cart')
const UserRouter=require('./src/routes/user')

app.engine("hbs", hbs.engine);
app.set('views', "./views");
app.set("view engine", "hbs");

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
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
  
  const cluster=require('cluster');
  const numCpus=require('os').cpus().length
  
      
app.use("/productos", product)
app.use("/carrito", cart)
app.use('/',UserRouter) 

  
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
    const server =  app.listen(PORT, () => {
      console.log(`🌩️ Escuchando peticiones en puerto: ${PORT}`)
    })
    
    server.on("error", (err) => {
      console.log(err)
    })
    
  }


