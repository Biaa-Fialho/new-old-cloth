

// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    listUserInfos,
    storeUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

const upload = require('../config/multer');

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.get('/user/information/:user_id', listUserInfos);
router.post('/user/update', upload.single('file'), updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;