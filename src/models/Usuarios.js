const {Schema,model}=require('mongoose');

const Usuario= new Schema({
    Nombre:{
        type:String,
        required:true
    },
    Cedula:{
        type: String,
        required: true,
        unique:true,
    },
    Tipo:{
        type:String,
        required:true
    },
    CorreoElectronico:{
        type: String,
        required: true,
        unique:true,
    },
    Contrasenia:{
        type: String,
        required: true
    }
})
module.exports=model('Usuario',Usuario,'Usuarios');