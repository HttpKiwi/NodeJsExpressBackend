const { Router } = require('express')
const router = Router();

const userController = require('../controllers/index.controller')

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUsersById);
router.post('/users', userController.createUser); 
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id/:name/:email', userController.updateUser);

module.exports = router;