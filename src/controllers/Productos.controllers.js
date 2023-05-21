const ProductosCtrl={};
//OBJETO de productos
const Productos=require('../models/Productos')

//Agregar productos
ProductosCtrl.RenderProductosF=(req,res)=>{
    //renderizado de la pantalla de agregar productos

    res.render('Productos/Nuevo_Prod');
};

ProductosCtrl.AGNuevoProd=async (req,res)=>{
    //Agregar nuevo producto a la BD
    const {Nombre,Precio,Descripcion}=req.body;
    const Producto=new Productos({Nombre,Precio,Descripcion});
    await Producto.save();
    
    res.redirect('/Productos');
};
//Mostrar productos
ProductosCtrl.MProductos= async(req,res)=>{
    //Muestra los profuctos de la BD en un formulario
    const listOfProductos=await Productos.find();
    res.render('Productos/ListaProductos',{listOfProductos})
};
//Modificar productos
ProductosCtrl.RenderEditProductos=async (req,res)=>{
    //Modifica el producto de un formulario
    const Producto=await Productos.findById(req.params.id);
    res.render('Productos/Mod_Productos',{Producto});
};
ProductosCtrl.EditProductos= async (req,res)=>{
    //Modifica el producto en un formulario
    const {Nombre,Precio,Descripcion} =req.body;
    await Productos.findByIdAndUpdate(req.params.id,{Nombre,Precio,Descripcion})
    res.redirect('/Productos');
};
//Eliminar productos
ProductosCtrl.DeleteProductos=async (req,res)=>{
    //Elimina el producto de un formulario
    await Productos.findByIdAndDelete(req.params.id)
    res.redirect('/Productos');
};



module.exports=ProductosCtrl;