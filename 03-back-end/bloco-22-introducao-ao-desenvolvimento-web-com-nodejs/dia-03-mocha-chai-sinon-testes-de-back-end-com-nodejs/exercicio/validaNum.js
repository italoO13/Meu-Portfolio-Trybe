const validaNum = (num) => {
  if(typeof num !== 'number') throw new Error('parametro é invalido');

  if(num === 0) {
    return 'igual a 0';
  }
  if(num> 0) {
    return 'maior que 0';
  }
  return 'menor que 0';
};


module.exports = validaNum;