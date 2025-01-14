// Exercicio de desafios da plataforma alura diverso//
// test 1

alert ('Boas Vindas ao nosso site!');
let nome =  prompt('Digite seu Nome');
let idade = prompt('Digite sua idade');

if (idade >= 18) {
    alert ('Pode tira a habilitação!');
} else if (idade < 18) { 
    alert (`Desculpe, mas você não pode tirar a Habilitação!`)
}

// Exercicio de desafios da plataforma alura diverso//
// test 2

alert ('Boas Vindas ao nosso site!');
let nick =  prompt('Digite seu Nick');
let número = prompt('Digite um número usando sinal positivo ou negativo');

if (número >= 0) {
    alert ('Seu número é positivo!');
} else if (número < 0) { 
    alert (`Seu número é negativo!`)
}

// Exercicio de desafios da plataforma alura diverso//
// test 1

alert ('Você chegou ao final do jogo, vamos ver sua pontuação?');
let pontuação = prompt ('Quantos pães você conseguiu pegar no caminho?');

if (pontuação >= 100) { 
    alert (`Parabéns você venceu! Sua pontuação foi ${pontuação}`);
} else if (pontuação < 100) {
    alert (` Que pena, tente novamente! Sua pontuação foi ${pontuação}`)
}

// Exercicio de desafios da plataforma alura diverso//
// test 1

alert ('Olá, tudo bem!');
let saldo = prompt ('Digite o valor total da sua conta corrente?');

if (saldo) { 
    alert (`Seu saldo é ${saldo}`)
}