//Ator

let yAtor = 370
let xAtor = 100
let inicioJogo = 370
let meusPontos = 0



function ator(){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW) && yAtor < 370){
    yAtor += 3
  }
  if (keyIsDown(RIGHT_ARROW) && xAtor < 470){
    xAtor += 3
  }
  if (keyIsDown(LEFT_ARROW) && xAtor > 0){
    xAtor -= 3
  }
   
}
let colisao = false;


function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i],      wCarro, hCarro, xAtor, yAtor, 10);
  
     if(colisao){
       yAtor = inicioJogo
       somColisao.play()
       if(meusPontos > 0){
       meusPontos -= 1
       }
       
     }
  }
}

function inicio (){
  if (yAtor < 13)
    yAtor = inicioJogo
}

function pontos(){
    textSize(25)
    textAlign(CENTER)
    fill(206, 89, 89)
    text(meusPontos, width/3, 27);
}

function marcarPontos(){
  if(yAtor < 16){
    somPontos.play();
    meusPontos +=1;
  }
}
