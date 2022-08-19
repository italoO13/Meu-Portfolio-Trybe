import express from 'express';
import generateToken from '../middlewares/generateToken';
import validateSignup from '../middlewares/validateSignup';
const router = express.Router();

router.use(validateSignup);
router.post('/', (_req, res) => {
  res.status(200).json({token: generateToken()});
});

export default router;