const cepModel = require('../models/Cep');

const getCepAll = async(cep) => {
  const format =  /^[0-9]{5}[0-9]{3}$/
  data = await cepModel.getCepAll(cep);
  console.log(data);

  if(!data.length) {
    return {cd:404 , code: "notFound", message:'CEP não encontrado'}
  }

  if(!format.test(cep)) {
    return {cd:400, code:'invalidData', message:'CEP inválido'};
  }

  return {cd:200, code:"ok", data}
};

const PostCep = async(address) => {
  const repit = await cepModel.getCepAll(address.cep);
  if(!repit.length){
    await cepModel.PostCep(address);
    return {cd:200};
  }
  return {cd:409, code:"alreadyExists", message:"CEP já existente"}
}

module.exports = {
  getCepAll,
  PostCep
}