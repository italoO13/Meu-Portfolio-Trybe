const modelService = require('../models/movieService');

const create = async({title, directedBy, releaseYear}) => {
  if(!title || !directedBy || !releaseYear) {
    return false;
  }
  const response = await modelService.create({title, directedBy, releaseYear});
  return {
    id: response.id,
    title, 
    directedBy, 
    releaseYear
  }
}

module.exports = create;