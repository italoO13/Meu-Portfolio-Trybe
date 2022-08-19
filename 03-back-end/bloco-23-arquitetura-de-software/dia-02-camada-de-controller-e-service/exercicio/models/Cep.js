const connection = require('./connection');
const fecthApi = require('./Fetch');

const getCepDB = async(cep) => {
  const [result] = await connection.execute(`
    SELECT cep, logradouro, bairro_id FROM ceps
    WHERE cep = ?
    `, [cep]);
  return result.map((address) => {
    return {cep: cepformatJson(address.cep),
      logradouro: address.logradouro,
      bairro_id: address.bairro_id,
    }
  });
}

const getCepAll = async(cep) => {
  const cepMd = cepFormatDb(cep);
  const response = await getCepDB(cepMd);
  if(response.length) {
    return response;
  }
  const data = await InsertFetchCep(cepMd)
  return data;

}

searchBairroDB = async(bairro, localidade, uf) => {
  let [response]= await connection.execute(`SELECT bairro, id FROM bairros WHERE bairro =?`, bairro);
  if (!response.length) {
    return await connection.execute(`INSERT INTO bairros (bairro, localidade, uf)
      VALUES(?,?,?)
    `, [bairro, localidade, uf])[0].insertId;
  }
  return response.id;
}

const InsertFetchCep = async (cepMd) =>{
  const dataFetch = await fecthApi(cepMd);

  if(dataFetch.erro) {
    return [];
  }

  await PostCep(dataFetch)

  return await getCepDB(cepMd);
}


const cepFormatDb = (cep) => {
  return cep.replace('-','');
}

const cepformatJson = (cep) => {
  const newCep = cep.substr(0,5)+ '-' + cep.substr(5)
  console.log(newCep);
  return newCep;
}

const PostCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  const id = await searchBairroDB({bairro, localidade, uf})
  await connection.execute(`INSERT INTO ceps (cep, logradouro, bairro_id)
    VALUES(?,?,?)
  `,[cepFormatDb(cep), logradouro, id])
}

module.exports = {
  getCepAll,
  PostCep
}