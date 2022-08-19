export const validateProductName = (req, res, next) => {
  const { productName} = req.body;
  if(!productName) {
    next(new Error('O campo productName é obrigatório'))
  }
  if(productName.length<4 ) {
    next(new Error('O campo productName deve ter pelo menos 4 caracteres'))
  }
  next();
};

export const validateInfos = (req, res, next) => {
  const { infos } = req.body;
  const { saleDate, warrantyPeriod } = infos;
  if(!infos) {
    next(new Error('O campo infos é obrigatório'))
  }

  if(!saleDate) {
    next(new Error('O campo saleDate é obrigatório'))
  }

  if( typeof saleDate === 'date') {
    next(new Error('O campo saleDate não é uma data válida'))
  }

  if( !warrantyPeriod) {
    next(new Error("O campo warrantyPeriod é obrigatório"));
  }

  if( warrantyPeriod<1 && warrantyPeriod>3) {
    next(new Error("O campo warrantyPeriod precisa estar entre 1 e 3"));
  }
  next();
};
