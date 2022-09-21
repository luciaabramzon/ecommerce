const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");
const MongoStore=require('connect-mongo')
const advancedOptions={useNewUrlParser: true, useUnifiedTopology:true}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ 
  store:MongoStore.create({
    mongoUrl:"mongodb+srv://backend:Backend2022@cluster0.taani6r.mongodb.net/usuarios?retryWrites=true&w=majority",
   mongoOptions:advancedOptions,
   ttl:60*10
  }),
  secret:'SECRET_PASSWORD',
  resave:false,
  saveUninitialized:false
}));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});

app.post("/api/login", (req, res) => {
  const name = req.body;
      req.session.user = name;
    res.json({ status: "ok" });

});

app.get("/api/dashboard", (req, res) => {
  if (req.session.user) {
    res.json({ status: "ok", user: req.session.user});
    return
  }
  res.status(401).send({error: "Unauthorized"});
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