const orderByName =(data) => {
  return data.sort((obj1, obj2)=> {
    if(obj1.name < obj2.name) {
      return 1;
    }
    if(obj1.name > obj2.name) {
      return -1
    }
    return 0;
  })
}

const returnobjId = (data, id) => {
  return data.find((obj) => {
    return obj.id === Number(id);
  });
}

const returnName = (data, name) => {
  return data.filter((obj) => obj.name.includes(name));
}

module.exports = {
  orderByName,
  returnobjId,
  returnName
}