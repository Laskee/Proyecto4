const {Router}=require('express')
const router= Router();
const {
    AdminRender,
    AllProductosComprados,

} = require('../controllers/Admin.controllers')

router.get('/ADM',AdminRender);

//Lista de todos los productos comprados(ADMINISTRADOR)
router.get('/AllProdComprados',AllProductosComprados);//Renderiza el historial de productos comprados

module.exports=router;