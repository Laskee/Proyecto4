const app =require('./server');

require("./Mongodb");

app.listen(app.get('Puerto'),function(req,res){
    console.log('Servidor en el puerto',app.get('Puerto'));
})