const express = require('express');
const User = require('../middlewares/user');
const validadeUser = require('../validateErros/validateUser');

const router = express.Router();

router.get('/', User.getAllUser)
router.get('/:id', User.getById)
router.use(validadeUser.validadePost);
router.post('/', User.postUser);
router.put('/:id', User.EditUser);



module.exports = router;