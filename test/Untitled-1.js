// Primeiro o alerta de boas-vindas
alert('Boas vindas ao nosso site!');

// Declaração das variáveis iniciais
let nome = 'Lua'; 
let idade = 25; 
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Mensagem de erro
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

// Captura de dados do usuário
nome = prompt('Nome?'); // sem repetir o let
idade = prompt('idade?'); // sem repetir o let

// Verificação da idade
if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}