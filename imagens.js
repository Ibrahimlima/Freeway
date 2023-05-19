//imagens e Sons do Jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let trilhaSonora;
let somPontos;
let somColisao;

function preload(){
  imagemDaEstrada = loadImage("imagem/estrada.png");
  imagemDoAtor = loadImage("imagem/ator-1.png");
  imagemCarro1 = loadImage("imagem/carro-1.png");
  imagemCarro2 = loadImage("imagem/carro-2.png")
  imagemCarro3 = loadImage("imagem/carro-3.png")
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro3, imagemCarro1];
  trilhaSonora = loadSound("Sons/trilha.mp3")
  somColisao = loadSound("Sons/colidiu.mp3")
  somPontos = loadSound("Sons/pontos.wav")
}