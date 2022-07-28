const exercicio8 = (num) => {
  return new Promise((resolve, reject)=>{
    if(num% 3 === 0 && num%5 ===0) {
      resolve('FizzBuzz');
    }
    if (num%3 === 0) {
      resolve('Fizz');
    }
    if ( num % 5 ===0) {
      resolve('Buzz');
      
    }
      reject(new Error(num));
    })
}

const main = async(num) => {
  try {
    console.log(await exercicio8(num))
  } catch (error) {
    console.log(error.message);
  }
}

main(3);
main(5);
main(15);
main(7);