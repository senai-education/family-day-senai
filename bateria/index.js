const PA = new Audio("sons/pratodeataque.mp3");
const bombo = new Audio("sons/bombo.mp3");
const choqueCLOSE = new Audio("sons/choqueCLOSE.mp3");
const choqueOpen = new Audio("sons/choqueOPEN.mp3");
const conducao = new Audio("sons/conducao.mp3");
const kick = new Audio("sons/kick.mp3");
const tarola = new Audio("sons/tarola.mp3");
const timbagrave = new Audio("sons/timbagrave.mp3");
const timbalaoagudo = new Audio("sons/timbalaoagudo.mp3");
const timbalaochao = new Audio("sons/timbalaochao.mp3");

function PratoA() {
    PA.play()
}

function B() {
    bombo.play()
}

function CC() {
    choqueCLOSE.play()
}

function CO() {
    choqueOpen.play()
}

function CD() {
    conducao.play()
}

function KC() {
    kick.play()
}

function TR() {
    tarola.play()
}

function TG() {
    timbagrave.play()
}

function TA() {
    timbalaoagudo.play()
}

function TC() {
    timbalaochao.play()
}

function clickTeclado(e) {
    console.log('chegou aq')
    switch (e.code) {
        case "KeyY":
            PratoA();
            break;

        case "KeyU":
            CD();
            break;

        case "KeyT":
            CC();
            break;

        case "KeyR":
            CC();
            break;

        case "KeyE":
            CO();
            break;
        case "KeyW":
            CO();
            break;

        case "KeyC":
            KC();
            break;

        case "KeyG":
            TA();
            break;

        case "KeyH":
            TG();
            break;

        case "KeyJ":
            TC();
            break;

        case "KeyS":
            TR();
            break;
        case "KeyA":
            TR();
            break;

        case "KeyX":
            B();
            break;
        case "KeyZ":
            B();
            break;

    }
}

window.addEventListener('keydown', (e) => clickTeclado(e))