// JavaScript for logics linked to the Cronos project

// Global variables
var horas = 0; var minutos = 0; var segundos = 0; var milissegundos = 0; 
var mainFunction; var letter; var key;

function countMs() { // Main's function to count the time
    milissegundos = milissegundos + 10;
    console.log(segundos)
    document.getElementById("milis").textContent = milissegundos;

    if (milissegundos == 1000) {
        milissegundos = 0;
        segundos++;
        document.getElementById("seg").textContent = segundos;
    }

    if (segundos == 60) {
        segundos = 0;
        document.getElementById("seg").textContent = segundos;
        minutos++;
        document.getElementById("min").textContent = minutos;
    }

    if (minutos >= 60) {
        minutos = 0;
        document.getElementById("min").textContent = minutos;
        horas++;
        document.getElementById("hora").textContent = horas;
    }
}

function reset() { //b1 - to reset the counter
    stop();
    horas = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    document.getElementById("milis").textContent = milissegundos;
    document.getElementById("seg").textContent = segundos;
    document.getElementById("min").textContent = minutos;
    document.getElementById("hora").textContent = horas;
    document.getElementById("milis2").textContent = milissegundos;
    document.getElementById("seg2").textContent = segundos;
    document.getElementById("min2").textContent = minutos;
    document.getElementById("hora2").textContent = horas;
    document.getElementById('b2').disabled = false;
}

function start() { //b2 - to start the counter
    mainFunction = setInterval(() => countMs(), 10);
    document.getElementById('b2').disabled = true;
    document.getElementById('b1').disabled = true;
}

function pause() { //b3 - to pause the counter and the marking
    clearInterval(mainFunction);
    document.getElementById('b2').disabled = false;
    document.getElementById('b1').disabled = false;
}

function mark() { //b4 - to mark the current value in the counter
    document.getElementById("milis2").textContent = milissegundos;
    document.getElementById("seg2").textContent = segundos;
    document.getElementById("min2").textContent = minutos;
    document.getElementById("hora2").textContent = horas;
}

//keyboard commands
function keyboard(e) {
    switch(e.code) {
        case 'KeyP':
        pause();
        break;
    case 'KeyS':
        start();
        break;
    case 'KeyM':
        mark()
        break;
    case 'KeyR':
        reset();
        break;
    }
}

window.addEventListener('keydown', (e) => keyboard(e));