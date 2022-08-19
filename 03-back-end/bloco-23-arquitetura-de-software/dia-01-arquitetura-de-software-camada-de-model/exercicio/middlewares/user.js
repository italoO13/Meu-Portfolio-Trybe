const rescue = require("../rescue");
const User = require("../model/user");

const postUser = rescue(async(req, res, next) => {
  const response = await User.addUser(req.body);
  res.status(201).json(response);
});

const getAllUser = rescue(async(req, res, next) => {
  const response = await User.getAll();
  res.status(200).json(response);
})

const getById = rescue(async(req, res, next) => {
  const {id} = req.params;
  const response = await User.getUserById(id);
  if(!response) {
    return next(new Error('Not Found'));
  }
  res.status(200).json(response);

});

const EditUser = rescue(async(req, res, next) => {
  const {id} = req.params;
  const response = await User.EditUser(id, req.body);
  if(!response) {
    return next(new Error('Not Found'));
  }
  res.status(200).json(response);
});

module.exports = {
  postUser,
  getAllUser,
  getById,
  EditUser
}