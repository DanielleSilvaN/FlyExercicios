alert('Seja bem vinda ao jogo do número secreto');
let númeroSecreto = 38;
console.log (númeroSecreto);
let chute = prompt('Escolha um número entre 0 e 40');
// se o chute for igual ao número secreto
if (chute == númeroSecreto)  { 
        alert (`Parabéns você acertou o número secreto ${númeroSecreto}`); 
    } else { 
        alert ('Você errou :(');
        // para tentativas do usuário
    } if (chute > númeroSecreto) {
        alert (`O Número Secreto é menor ${chute}`);
    } else {
        alert (`O número é maior que o ${chute}`);
    }
