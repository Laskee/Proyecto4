const {Schema,model}=require('mongoose');
const Producto_Vendido=new Schema({
    NombreU:{
        type:String,
        required:true
    },
    Cedula:{
        type: String,
        required: true
    },
    NombreProd:{
        type: String,
        required: true
    },
    Cantidad:{
        type: Number,
        required: true
    },
    Costo:{
        type: Number,
        required: true
    }
},{
    timestamps:true
})

module.exports=model('Producto_Vendido',Producto_Vendido,'Productos_Vendidos');