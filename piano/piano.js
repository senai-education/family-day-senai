const CT = new Audio("notes/C.mp3")
const DT = new Audio("notes/D.mp3")
const ET = new Audio("notes/E.mp3")
const FT = new Audio("notes/F.mp3")
const GT = new Audio("notes/G.mp3")
const AT = new Audio("notes/A.mp3")
const BT = new Audio("notes/B.mp3")

function Cpiano() {
    CT.play()
    img("ft/1tecla.png")
}

function Dpiano() {
    DT.play()
    img("ft/2tecla.jpg")
}

function Epiano() {
    ET.play()
    img("ft/3tecla.jpg")
}

function Fpiano() {
    FT.play()
    img("ft/4tecla.jpg")
}

function Gpiano() {
    GT.play()
    img("ft/5tecla.jpg")
}

function Apiano() {
    AT.play()
    img("ft/6tecla.jpg")
}

function Bpiano() {
    BT.play()
    img("ft/7tecla.jpg")
}

function tocar(e) {
    switch (e.code) {
        case "KeyA":
            Cpiano()
            img("ft/1tecla.png")
            break;
        case "KeyS":
            Dpiano()
            img("ft/2tecla.jpg")
            break;
        case "KeyD":
            Epiano()
            img("ft/3tecla.jpg")
            break;
        case "KeyF":
            Fpiano()
            img("ft/4tecla.jpg")
            break;
        case "KeyG":
            Gpiano()
            img("ft/5tecla.jpg")
            break;
        case "KeyH":
            Apiano()
            img("ft/6tecla.jpg")
            break;
        case "KeyJ":
            Bpiano()
            img("ft/7tecla.jpg")
            break;

    }
}
window.addEventListener('keydown', (e) => tocar(e))

function img(nome) {
    var image = document.getElementById("fotin")
    image.setAttribute('src', nome)
    setTimeout(function() {
        var pa = document.getElementById("fotin")
        image.setAttribute('src', 'ft/p.jpg')
    }, 300);
}