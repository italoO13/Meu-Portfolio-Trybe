import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
app.use(bodyParser.json());

app.use('/', router);
app.use((err, _req, res, _next) => {
  console.log(err)
  if(err.code && err.status) {
    return res.status(err.status).json({message: err.message, code: err.code})
  }
  if(err.message ==='Unauthorized') {
    return res.status(401).json({message: 'missing fields'});
  }
  return res.status(404).json({message: err.message});
})
export default app;