const { Router } = require('express');
const router=Router();

const{
    RenderProductosF,
    AGNuevoProd,
    MProductos,
    RenderEditProductos,
    EditProductos,
    DeleteProductos
 }=require('../controllers/Productos.controllers');

 //Agregar productos
router.get('/ProdAdd',RenderProductosF)
router.post('/Prod/Add',AGNuevoProd) //Evento
//Obtener todos los productos
router.get('/Productos',MProductos)

//Modificar productos
router.get('/ProdEdit/:id',RenderEditProductos)
router.put('/ProdEdit/:id',EditProductos) //Evento
//Eliminar productos
router.delete('/ProdDelete/:id',DeleteProductos) //Evento


module.exports=router;