const {Router}=require('express')
const router= Router();
const { 
    ClienteRenderG,
    ClienteRenderP, 
    Compradeproductos,
    RegCompradeproductos,
    ProductosComprados,
    RedirectCompradeproductos,
 } = require('../controllers/Cliente.controllers')
//Pagina principal de clientes
router.get('/Cliente',ClienteRenderG);
router.post('/Cliente',ClienteRenderP);

//Comprar Productos
router.post('/C_Productos',Compradeproductos);//Renderiza los productos que van a ser comprados
router.post('/RedirectC_Productos/:id',RedirectCompradeproductos);//Registrar compra de productos(EVENTO)
router.post('/RC_Productos/:id',RegCompradeproductos);//Registrar compra de productos(EVENTO)

//Listar productos del usuario
router.post('/ProdComprados',ProductosComprados);//Renderiza los productos comprados por el usuario



module.exports=router;