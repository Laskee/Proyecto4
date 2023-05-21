const IndexCtrl={};
const Usuario=require('../models/Usuarios')

//PARA INICIAR SESION ---->
IndexCtrl.IndexRender=(req,res)=>{
    res.render('index')
};
IndexCtrl.IndexLogin=async (req,res)=>{
    const{correo,contrasenia}=req.body
    const US=await Usuario.findOne({CorreoElectronico: correo,Contrasenia:contrasenia})
    if(!US){
        res.render('index')
    }else{
        if(US.Tipo=="Cliente"){
            
            res.render('Cliente',{US});
        }else{
            
            if(US.Tipo=="Administrador"){
                res.render('Admin');
            }else{
                res.render('index');
            }
            
        }
        
    }
    
};
//PARA EL REGISTRO DE NUEVOS USUARIOS ---->
IndexCtrl.IndexRegistrar=(req,res)=>{
    res.render('Usuarios/Registro')
};
IndexCtrl.RegistrarUsuario=async (req,res)=>{
    //Registra los usuarios en la base de datos
    const {Nombre,Cedula,Tipo,CorreoElectronico,Contrasenia,Confirmacion}=req.body;
    if(Contrasenia==Confirmacion){
        if(Contrasenia.length >= 4){
            const US=await Usuario.findOne({CorreoElectronico: CorreoElectronico,Cedula:Cedula})
            if(US){
                res.redirect('/Usuarios/Registro');
            }else{
                const NUsuario=new Usuario({Nombre:Nombre,Cedula:Cedula,Tipo:Tipo,CorreoElectronico:CorreoElectronico,Contrasenia:Contrasenia})
                await NUsuario.save();
                res.redirect('/')
            }
        }else{
            res.render('Usuarios/Registro',{Nombre,Cedula,Tipo,CorreoElectronico,Contrasenia,Confirmacion})
        }
    }else{
        res.render('Usuarios/Registro',{Nombre,Cedula,Tipo,CorreoElectronico,Contrasenia,Confirmacion})
    }
    
};


module.exports=IndexCtrl;