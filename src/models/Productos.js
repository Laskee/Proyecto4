const {Schema,model}=require('mongoose');

const Producto=new Schema({
    Nombre:{
        type:String,
        required:true
    },
    Precio:{
        type:Number,
        required: true
    },
    Descripcion:{
        type: String,
        required: true
    }
})

module.exports=model('Producto',Producto,'Productos');