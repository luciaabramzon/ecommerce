const mongoose = require("mongoose");

// Hacer la conexion con la base de datos
async function connection() {
  // mongodb://<user>:<password>@localhost:port/db
/*   const URIString = "mongodb://localhost:27017/colegio" */
    const URIString="mongodb+srv://lucia:Jordi2020@cluster0.mlri75e.mongodb.net/plataforma?retryWrites=true&w=majority"
  await mongoose.connect(URIString);
  console.log('conectado')
}

module.exports = connection;