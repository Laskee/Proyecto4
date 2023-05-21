const ADMCtrl={};
const Productos=require('../models/Productos')
const Productos_Vendidos=require('../models/Productos_Vendidos')

ADMCtrl.AdminRender=(req,res)=>{
    res.render('Admin')
};
//Muestra el historial de productos que han sido comprados
ADMCtrl.AllProductosComprados=async (req,res)=>{
    const lstP_V=await Productos_Vendidos.find();
    res.render('ProductosV/Historial',{lstP_V});
};

module.exports=ADMCtrl;