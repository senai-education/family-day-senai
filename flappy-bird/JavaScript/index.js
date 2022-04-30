var buraco = document.getElementById("buraco")
var Pular = false
var point = 0
buraco.addEventListener(`animationiteration`, (e) => {
    var random = -((Math.random()*300)+150)
    buraco.style.top = random + "px"
    point = point +1 
    document.getElementById("pontos").innerHTML = point
})

var fall = setInterval(()=>{
    var Passaro = document.getElementById("passaro")
    var Cima = parseInt(window.getComputedStyle(Passaro).getPropertyValue("top"))
    console.log("top")
   if(!Pular) Passaro.style.top = Cima + 12 + "px" 

   var PassaroPeso = Passaro.getBoundingClientRect().height
   
   if(Cima > 570 - PassaroPeso){
       alert("Game over")
       clearInterval(fall)
       window.location.reload()
   }

   var gapbound = document.getElementById("buraco").getBoundingClientRect()
   var ballbound = document.getElementById("passaro").getBoundingClientRect()

   if(ballbound.left >= gapbound.left && !(ballbound.top>gapbound.top && ballbound.bottom < gapbound.bottom)){
       alert("Game Over")
       window.location.reload()
   }
},60)

window.addEventListener("keydown",(e)=>{

    if(e.key == "ArrowUp"){
    Pular = true
    var passaro = document.getElementById("passaro")
    var cima = parseInt(window.getComputedStyle(passaro).getPropertyValue("top"))
    passaro.style.top = cima - 40 + "px" 

    setTimeout(()=> {
        Pular = false
    },500)
}
    
})