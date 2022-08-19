const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

router.get('/hello', rescue((req, res) => {
  // req.body agora está disponível
  res.status(200).json({message:'funcionou'});
}));

module.exports = router;