const {Router}=require('express')
const router= Router();
const {
    IndexRender,
    IndexLogin,
    IndexRegistrar,
    RegistrarUsuario,
} = require('../controllers/index.controller')

router.get('/',IndexRender);
router.post('/',IndexLogin);

router.get('/Reg',IndexRegistrar);
router.post('/Reg',RegistrarUsuario);

module.exports=router;