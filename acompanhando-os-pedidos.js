/*Desafio
Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.

Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.
Exemplo de Entrada:
Ana
Rua DIO, 5
12
1111-9999
Exemplo de Saída:
Cliente: Ana, Rua DIO, 5
ID: 12
Tel: 1111-9999
*/

const prompt = require('prompt-sync')();

const pedido = {
    cliente: {
      nome: prompt(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: prompt(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(prompt()), // Lê a terceira linha da "Entrada": ID do Pedido.
  };

  pedido.cliente.telefone = prompt();

  console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`);
  console.log(`ID: ${pedido.id}`);
  console.log(`Tel: ${pedido.cliente.telefone}`);