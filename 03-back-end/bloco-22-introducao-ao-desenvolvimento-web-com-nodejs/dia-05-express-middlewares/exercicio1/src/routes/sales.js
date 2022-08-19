import express from 'express';
import { validateInfos, validateProductName } from '../middlewares/validateSales';
import validateToken from '../middlewares/validateToken';
const router = express.Router();

router.use(validateToken);
router.use(validateProductName);
router.use(validateInfos);

router.post('/', (req, res) => {
  res.send('funcionou, rota sales');
});// router.use('/', (req, res) => {
  //   res.send('foi');
  // })
  

export default router;