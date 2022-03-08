
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  

//   Agora você vai fazer alguns exercícios de fixação.

//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

//   Note que o parâmetro da função já está sendo passado na chamada da função.



  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº:${order.address.number},AP:${order.address.apartment}`
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
      order.name = "Luiz Silva";
      order.payment.total = 50;
    // Adicione abaixo as informações necessárias.
    return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza).join(", ")} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
  
  }
  
  console.log(orderModifier(order));