// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. 

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(names) {
    // escreva seu código aqui
    return names.reduce((acc,string) => acc + string.split('').filter((letra)=>{
      return  letra ==='A' || letra ==='a'
    }).length, 0)
  }
  

  console.log(containsA(names))