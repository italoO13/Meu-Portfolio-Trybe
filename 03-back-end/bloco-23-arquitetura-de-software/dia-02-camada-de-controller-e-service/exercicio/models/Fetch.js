const axios = require('axios');

const fecthApi = async(cep) => {
  try {
    console.log('entrou');
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

module.exports = fecthApi;