const SomFundo = new Audio("music/music.mp3")
const SomGameOver = new Audio("music/gameover.mp3")


var nave = { X: 12, Y: 23 }
let naveElement
var ovni = { X: 2, Y: 1 }
var direcao = { x: 1, y: 0 }
var ultimaVezAtualizada = 0;
var velocidade = 50;
var ovnis = []
var vezesAtualiza = 0;
var verifica = true
let pontos = 0


function preencher() {
    var contador = 0;
    for (var x = 3; x < 23; x++) {
        for (var y = 2; y < 7; y++) {
            ovnis[contador] = { x: x, y: y }
            contador++;
        }
    }
}

function moverOvni() {
    let right = true

    setInterval(() => {
        const allOvnis = document.getElementsByClassName("ovnidiv")
        const findInMaxRight = [...allOvnis].find(item => item.style.gridColumnStart == 24)
        const findInMaxLeft = [...allOvnis].find(item => item.style.gridColumnStart == 1)
        const morreu = [...allOvnis].find(item => (item.style.gridColumnStart === naveElement.style.gridColumnStart && item.style.gridRowStart === naveElement.style.gridRowStart))

        if (morreu) {
            SomFundo.pause();
            SomGameOver.play();
            window.location.reload()
            alert('morreu')

        }

        if (right && findInMaxRight === undefined) {
            for (var i = allOvnis.length - 1; i >= 0; i--) {
                allOvnis[i].style.gridColumnStart = Number(allOvnis[i].style.gridColumnStart) + 1
            }
        } else if (!right && findInMaxLeft === undefined) {
            for (var i = allOvnis.length - 1; i >= 0; i--) {
                allOvnis[i].style.gridColumnStart = Number(allOvnis[i].style.gridColumnStart) - 1
            }
        } else {
            right = !right
            for (var i = allOvnis.length - 1; i >= 0; i--) {
                allOvnis[i].style.gridRowStart = Number(allOvnis[i].style.gridRowStart) + 1
            }
        }

    }, 300)
}

function main(tempoAtual) {
    SomFundo.play()
    preencher()
    atualizaGame();
}

function desenharOvni() {
    for (var i = 0; i < ovnis.length; i++) {
        var ovnidiv = document.createElement("div");
        ovnidiv.style.gridColumnStart = ovnis[i].x
        ovnidiv.style.gridRowStart = ovnis[i].y
        ovnidiv.classList.add("ovnidiv");
        board.appendChild(ovnidiv);
    }
}

function atualizaGame() {
    board.innerHTML = "";
    var navediv = document.createElement("div");
    navediv.style.gridColumnStart = nave.X
    naveElement = navediv
    navediv.style.gridRowStart = nave.Y
    navediv.classList.add("navediv");
    board.appendChild(navediv);
    desenharOvni();

}

const moverNave = (X, Y) => {
    nave = {
        X,
        Y
    }
    naveElement.style.gridColumnStart = X
    naveElement.style.gridRowStart = Y
}

const naveAtirar = () => {
    const bullet = document.createElement("div")
    const bulletCoords = {
        X: nave.X,
        Y: nave.Y - 1
    }
    bullet.classList.add("bulletdiv")
    bullet.style.gridColumnStart = bulletCoords.X
    bullet.style.gridRowStart = bulletCoords.Y
    board.appendChild(bullet);
    var loop = setInterval(() => {
        const allOvnis = document.getElementsByClassName("ovnidiv")
        const findOvni = [...allOvnis].find(item => item.style.gridColumnStart == bulletCoords.X && item.style.gridRowStart == bulletCoords.Y - 1)
        bullet.style.gridRowStart = bulletCoords.Y - 1
        bulletCoords.Y = bulletCoords.Y - 1
        if (findOvni) {
            findOvni.remove()
            bullet.remove()
            pontos += 10;
            pontuacao.innerHTML = pontos + " pontos"
            clearInterval(loop)
            if (pontos == 1000) {
                setInterval(() => {
                    window.location.reload()
                }, 2000)
            }
        } else if (bulletCoords.Y - 1 === 0) {
            bullet.remove()
            clearInterval(loop)
        }
    }, 100)
}

window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowRight":
            if ((nave.X + 1) <= 24) {
                moverNave(nave.X + 1, nave.Y)
            }
            break
        case "ArrowLeft":
            if ((nave.X - 1) > 0) {
                moverNave(nave.X - 1, nave.Y)
            }
            break
        case "KeyX":
        case "Space":
            naveAtirar()
            break
        case "KeyA":
            SomFundo.play()
            break
    }
})

main();
preencher();
moverOvni();
