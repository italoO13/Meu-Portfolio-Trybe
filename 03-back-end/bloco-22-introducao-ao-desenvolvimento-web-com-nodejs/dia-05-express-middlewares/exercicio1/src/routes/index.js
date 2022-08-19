import express from 'express';
const router = express.Router();
import routerSales from './sales';
import routerSignup from './signup';

router.use('/signup', routerSignup);
router.use('/sales', routerSales);
router.use('/', (req, res) => {
  res.send('foi');
})

export default router;