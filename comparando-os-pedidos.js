/*Desafio
O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.
Exemplo de Entrada:
Renan
Massa
45.0
Bianca
Kibe
8.0
Exemplo de Saída:
Os pedidos são diferentes
*/

const prompt = require('prompt-sync')();

const cliente1 = { 
    nome: prompt(), 
    item: prompt(), 
    preco: parseFloat(prompt())
  };
  
  // JSON do Cliente 2
  const cliente2 = { 
    nome: prompt(), 
    item: prompt(), 
    preco: parseFloat(prompt()) 
  };

  const saoIguais = JSON.stringify(cliente1) === JSON.stringify(cliente2);

  console.log(saoIguais ? "Os pedidos são iguais" : "Os pedidos são diferentes");
