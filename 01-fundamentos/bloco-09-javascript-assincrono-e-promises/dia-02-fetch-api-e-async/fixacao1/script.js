const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;

  const usoJSONPorque = JSON.parse(jsonInfo);
  const {muitasEmpresasUsam, temVariasVantagens, muitasLinguagensDaoSuporte} = usoJSONPorque
  
const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

muitasEmpresasUsam.forEach((empresa) => {
    const newLi = document.createElement("li");
    newLi.innerText = empresa;
    corporationsList.appendChild(newLi);
})

temVariasVantagens.map((vantagem) => {
    const newLi = document.createElement('li');
    newLi.innerText = vantagem;
    advantagesList.appendChild(newLi);
})

muitasLinguagensDaoSuporte.forEach((linguagem) => {
    const newLi = document.createElement('li');
    newLi.innerText = linguagem;
    languagesList.appendChild(newLi);

})