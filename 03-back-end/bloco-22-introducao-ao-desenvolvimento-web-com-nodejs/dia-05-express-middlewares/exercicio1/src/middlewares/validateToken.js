const validateToken = (req, res, next) => {
  const {authorization} = req.headers;
  console.log(req.header.authorization);
  if(!authorization || authorization.length !== 16) {
    next(new Error('Unauthorized'));
  }

  next();
};

export default validateToken;
