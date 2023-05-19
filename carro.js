let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40 , 90 , 150, 210, 270, 318]
let velCarros = [2.2, 3.5, 4.3, 6, 5.2, 2.9]
let wCarro = 50
let hCarro = 40

function mostraCarro(){
 for (let i = 0; i < imagemCarros.length;i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
 }
}

function movimentaCarro(){
  for(let i = 0; i < velCarros.length; i++){
  xCarros[i] -= velCarros[i];
  if(xCarros[i] < -50){
    xCarros[i] = 550
  }
 }
}

