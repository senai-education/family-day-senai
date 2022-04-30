const musicacolisao = new Audio("gameover.mp3");
const musicam = new Audio("move.mp3");
var velocidade = 10;
var atualizaPontuacao = 0;
var pontos = 0;

let personagem = document.querySelector('#personagem');
let quadrado = document.querySelector('#quadrado');

function pular() {
    if (personagem.classList != 'animar') {
        personagem.classList.add('animar')
        musicam.play();
    }

    setTimeout(function () {
        personagem.classList.remove('animar')
    }, 500)

}

var testarColisao = setInterval(function () {
    atualizaPontuacao = atualizaPontuacao + 1;

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if (EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130) {
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        musicacolisao.play();
        alert(`Fim do Jogo!! Você fez ${pontos} pontos. Tente novamente!!!`)
        window.location.reload();

    }

    if (atualizaPontuacao % 100 == 0) {
        pontos += 10;
        pontuacao.innerHTML = pontos + " pontos"
        console.log(pontos)

    }
}, velocidade)



var Pontos = 0;

function atualizaPontuacaoGame(atualizaPontuacao) {
    if (atualizaPontuacao % 5000 == 0) {
        pontos += 10;
        pontuacao.innerHMTL = pontos + " pontos"
        console.log(pontos)
        velocidade = velocidade + 10
    }
}





