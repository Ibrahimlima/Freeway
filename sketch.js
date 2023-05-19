function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop(0,1,0.1)
}

function draw() {
  background(imagemDaEstrada);
  ator();
  mostraCarro()
  movimentaCarro();
  movimentaAtor();
  inicio ();
  verificaColisao();
  pontos();
  marcarPontos()
}




