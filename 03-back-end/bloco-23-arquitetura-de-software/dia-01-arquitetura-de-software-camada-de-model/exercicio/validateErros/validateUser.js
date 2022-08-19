const validadePost = (req, res, next) => {
  firstName(req, res, next);
  lastName(req, res, next);
  email(req, res, next);
  password(req, res, next);
  next();
}

const firstName = (req, res, next) =>{
  const {firstName} = req.body;
  if(!firstName) {
    return next(new Error("\"firstName\" is required"));
  }
  if(firstName === '') {
    return next(new Error("\"firstName\" is not allowed to be empty"));
  }
}

const lastName = (req, res, next) => {
  const {lastName} = req.body;
  if(!lastName) {
    return next(new Error("\"lastName\" is required"));
  }
  if(lastName === '') {
    return next(new Error("\"lastName\" is not allowed to be empty"));
  }
}

const email = (req, res, next) => {
  const {email} = req.body;
  const re = /\S+@\S+\.\S+/;
  if(!email) {
    return next(new Error("\"email\" is required"));
  }
  if(email === '') {
    return next(new Error("\"email\" is not allowed to be empty"));
  }
  if(!re.test(email)) {
    return next(new Error("\"email\" must be a valid email"));
  }
}

const password = (req, res, next) => {
  const {password} = req.body;
  if(!password) {
    return next(new Error("\"password\" is required"));
  }
  if(password.length<6) {
    return next(new Error('Passowrd deve conter mais que 6 caracteres'));
  }
}

module.exports ={
  validadePost,
}