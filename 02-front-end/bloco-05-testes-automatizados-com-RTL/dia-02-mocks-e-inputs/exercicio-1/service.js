question1 = () => {
  return Math.floor(Math.random()*101)
}

StringUpperCase = (string) => {
  return string.toUpperCase();
}
StringFirstLetter = (string) => {
  return string[0];
}

StringConc = (string1,string2) => {
  return string1 + string2;
}

fetchDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = {
  question1,
  StringUpperCase,
  StringFirstLetter,
  StringConc,
  fetchDog
};
