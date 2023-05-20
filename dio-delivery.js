/*Desafio
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.
Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá conter as seguintes propriedades:
cliente: uma string com o nome do cliente.
endereco: uma string com o endereço de entrega.
quantidade de itens: indica a quantidade de itens que devem ser lidos no array a seguir.
itens: um array de objetos que representam um item do pedido, com as seguintes propriedades:
nome (string)
preço (number)
Exemplo de Entrada:
João
Rua B, 456
2
Hamburguer 
15
Batata frita
8
Exemplo de Saída:
Pedido: João
Endereco de entrega: Rua B, 456
Total: R$ 28.00
*/

const prompt = require('prompt-sync')();

const pedido = {
    cliente: prompt(),
    endereco: prompt(),
    itens: [],
    taxaEntrega: 5.0
  };
  
  // Para popular o array de itens, criamos a seguinte estrutura de repetição:
  const quantidadeItens = parseInt(prompt());
  while (pedido.itens.length < quantidadeItens) {
    const nomeItem = prompt();
    const precoItem = parseFloat(prompt());
    pedido.itens.push({ nome: nomeItem, preco: precoItem });
  }

  const total = pedido.itens.reduce((acc, item) => acc + item.preco, 0) + pedido.taxaEntrega;

  console.log(`Pedido: ${pedido.cliente}`);
  console.log(`Endereco de entrega: ${pedido.endereco}`);
  console.log(`Total: R$ ${total.toFixed(2)}`);