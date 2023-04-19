// Obter o botão e o campo de entrada
const botao = document.querySelector('#verificar');
const palavra = document.querySelector('#palavra');
const tabela = document.querySelector('#tabela');

// Adicionar um ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
  // Obter a palavra do campo de entrada
  const texto = palavra.value;

  // Verificar se a palavra é um palíndromo
  const resultado = verificarPalindromo(texto);

  // Adicionar a palavra e o resultado à tabela
  const linha = tabela.insertRow();
  const coluna1 = linha.insertCell(0);
  const coluna2 = linha.insertCell(1);
  coluna1.innerHTML = texto;
  coluna2.innerHTML = resultado ? 'Pode ser um palíndromo' : 'Não pode ser um palíndromo';
});

// Função para verificar se a palavra é um palíndromo
function verificarPalindromo(texto) {
  const letras = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  const inverso = letras.split('').reverse().join('');
  return letras === inverso;
}
/* função recebe uma string, remove caracteres especiais, inverte a string e compara se a string 
original é igual à string invertida, retornando um valor booleano indicando se é ou não um palíndromo.*/