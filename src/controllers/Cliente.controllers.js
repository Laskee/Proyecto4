const ClienteCtrl={};

const Productos=require('../models/Productos')
const Productos_Vendidos=require('../models/Productos_Vendidos')
//Pagina principal
ClienteCtrl.ClienteRenderG=(req,res)=>{
    res.render('Cliente');
};
ClienteCtrl.ClienteRenderP=(req,res)=>{
    const{US}=req.body
    res.render('Cliente',{US});
};
//Compra de productos
ClienteCtrl.Compradeproductos=async (req,res)=>{
    const{US}=req.body
    const lstProductos=await Productos.find();
    res.render('ProductosV/C_Productos',{US,lstProductos});
};
ClienteCtrl.RedirectCompradeproductos=async (req,res)=>{
    //Evento para registrar el producto comprado del usuario
    const{US}=req.body
    const NP=await Productos.find({_id:req.params.id})
    res.render('ProductosV/Confirm_compra',{US,NP});
};


ClienteCtrl.RegCompradeproductos=async (req,res)=>{
    //Evento para registrar el producto comprado del usuario
    const{US,PROD,Cantidad,MontoT,MPagar}=req.body;
    const user=JSON.parse(US) //Convierte un objeto javascript(string) a jason
    const prod=JSON.parse(PROD)
    if(parseFloat(MPagar)>parseFloat(MontoT)){
        const PV=await new Productos_Vendidos({NombreU:user.Nombre,Cedula:user.Cedula,NombreProd:prod.Nombre,Cantidad:Cantidad,Costo:MontoT});
        PV.save();
        const LPVU=await Productos_Vendidos.find({Cedula:user.Cedula})//Lista de productos vendidos del usuario
        res.render('ProductosV/ProdC_Usuario',{US,LPVU});
    }else{
        const NP=await Productos.find({_id:prod._id})
        const aviso="El monto ingresado es menor al valor del lote de productos"
        res.render('ProductosV/Confirm_compra',{US,NP,aviso});
    }
};
//Productos comprados por el usuario
ClienteCtrl.ProductosComprados= async(req,res)=>{
    const{US}=req.body
    const user= JSON.parse(US)
    const LPVU=await Productos_Vendidos.find({Cedula:user.Cedula})//Lista de productos vendidos del usuario
    res.render('ProductosV/ProdC_Usuario',{US,LPVU});
};



module.exports=ClienteCtrl;