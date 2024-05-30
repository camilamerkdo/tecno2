let finas = []; // contiene todos los trazos finos
let grandes = []; // contiene trazos grandes
let grises = [];// contiene trazos grises
let cantidadfinas = 5;
let cantidadgrandes = 11;
let cantidadgrises = 7;
let contadordetrazos = 20;  // Límite de manchas en pantalla
let contadordetiempo = 0;   // Inicializa el contador de tiempo
let mancha;

// CARGO LAS FOTOS DE MANCHAS DE PINTURA. 
function preload(){

  // cargo las finas
  for( let i=0 ; i<cantidadfinas ; i++ ){
    let nombre = "data/finas"+nf(i,2)+".png";
    finas[i] = loadImage( nombre );
  }

  // cargo las grandes
  for( let i=0 ; i<cantidadgrandes ; i++ ){
    let nombre = "data/grandes"+nf(i,2)+".png";
    grandes[i] = loadImage( nombre );
  }

  // cargo las grises
  for( let i=0 ; i<cantidadgrises ; i++ ){
    let nombre = "data/grises"+nf(i,2)+".png";
    grises[i] = loadImage( nombre );
  }

}

function setup() {
  createCanvas(550, windowHeight); // ancho parecido a las obras!!
  background(240, 240, 240);  // color de fondo parecido a la obra
  imageMode( CENTER );
  mancha = new Mancha(grandes, finas, grises); // Inicializa la instancia de Mancha
  contadordetiempo = millis(); // Inicializa el contador de tiempo al inicio
}

function draw() {

  // Verifica si han pasado 2 seg (2000 milisegundos) desde la última mancha y si aún quedan trazos por dibujar
  if (millis() - contadordetiempo >= 2000 && contadordetrazos > 0) {
    mancha.dibujar(mouseX, mouseY);
    contadordetiempo = millis(); // Reinicia el contador de tiempo
    contadordetrazos--; // Resta un punto al contador de manchas
  }

}