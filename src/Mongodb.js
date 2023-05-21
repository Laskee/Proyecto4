const mongoose = require('mongoose')

//const CDC='mongodb://127.0.0.1:27017/TiendaV' //Cadena de conexion local
const CDC="mongodb+srv://MONGODB:mongo1234@cluster0.hqftia5.mongodb.net/TiendaV?retryWrites=true&w=majority" //Cadena de conexion
const CDC2="mongodb+srv://MONGODB:mongo1234@cluster0.rr3h9rg.mongodb.net/TiendaV?retryWrites=true&w=majority"

mongoose.connect(CDC2,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(db => console.log("Base de datos conectada."))
   .catch(err=>console.log(err));