const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@factoria5.dluljdw.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Base de datos conectada')) 
  .catch(e => console.log('error de conexión', e))

