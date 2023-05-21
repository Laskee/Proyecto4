const express= require('express');
const path=require('path');
//const morgan=require('morgan');
const methodOverride=require('method-override');

//Initialization
const app=express();
//Config
app.set('Puerto',process.env.PORT || 4848);//Puerto del servidor
app.set('views',path.join(__dirname,'views'));//Direccion de las citas

app.set('view engine','pug');

//middleware
//app.use(morgan('dev')); //Muestra ebn consola las rutas solicitadas
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
//Archivos estaticos
app.use(express.static(path.join(__dirname,'public')))
//Rutas
app.use(require('./routes/Admin.routes'))
app.use(require('./routes/index.routes'))
app.use(require('./routes/Productos.routes'))
app.use(require('./routes/Cliente.routes'))

module.exports = app;