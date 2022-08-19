const validateSignup = (req, res, next) => {
  const { email, password, firstName, phone} = req.body;
  if (!email || !password || !firstName || !phone) {
    next(new Error('Unauthorized'))
  }

  next();
}
export default validateSignup;