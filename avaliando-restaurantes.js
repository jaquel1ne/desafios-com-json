/*Desafio
Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.
Exemplo de Entrada:
DIO
5.0
Feijuca
4.5
Exemplo de Saída:
Restaurante: DIO, Avaliação: 5.0
*/

const prompt = require('prompt-sync')();

const restaurantes = [
    {
      nome: prompt(), 
      avaliacao: parseFloat(prompt())
    },
    {
      nome: prompt(), 
      avaliacao: parseFloat(prompt())
    }
  ];

  const melhorAvaliacao = Math.max(...restaurantes.map(restaurante => restaurante.avaliacao));
  const melhoresRestaurantes = restaurantes.filter(restaurante => restaurante.avaliacao === melhorAvaliacao);

  melhoresRestaurantes.forEach(restaurante =>
     console.log(`Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao.toFixed(1)}`));
