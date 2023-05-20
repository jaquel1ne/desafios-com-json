/*Desafio
Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que encontre o pedido mais próximo a partir de uma lista de pedidos. O programa deve exibir o nome e o tipo de comida do pedido mais próximo.
a distância em quilometros do pedido até o restaurante, representado por um valor de 0 a 15.
Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo as informações de cada pedido (nome, tipo e distância).
Exemplo de Entrada:
Rafael
Massa
3.5
Julia
Arabe
4.2
Carla
Hamburguer
2.0
Exemplo de Saída:
O pedido mais próximo é o de Carla, do tipo Hamburguer
*/

const prompt = require('prompt-sync')();

const pedidos = [
    { 
      nome: prompt(), 
      tipo: prompt(), 
      distancia: parseFloat(prompt())
    },
    { 
      nome: prompt(), 
      tipo: prompt(), 
      distancia: parseFloat(prompt())
    },
    { 
      nome: prompt(), 
      tipo: prompt(), 
      distancia: parseFloat(prompt())
    }
  ];

const pedidoMaisProximo = pedidos.filter(pedido =>
     pedido.distancia >= 0 && pedido.distancia <= 15)
     .sort((a, b) => a.distancia - b.distancia)[0];

console.log(`O pedido mais próximo é o de ${pedidoMaisProximo.nome}, do tipo ${pedidoMaisProximo.tipo}`);