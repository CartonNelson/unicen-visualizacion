var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var seleccion=[];
var figuras =[];
var figurasFijas=[];
var dificultad;
$("#dificultad").val($("#dificultad option:first").val());
$('#dificultad').change(function() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
 dificultad=($('#dificultad').val());
 console.log(dificultad);
  iniciar(dificultad);
});
//figuras encastrables
var tri = new triangulo(100,50,50,'#877645');
var circ = new circulo(100,250,50,'brown');
var cuad = new cuadrado(50,350,90,'grey');
var dec =new decagono(250,100,50,"red");
var hep = new heptagono(250,250,50,"violet")
var hex= new hexagono(250,400,50,"orange");
var pen= new pentagono(400,100,50,'yellow');
var rec = new rectangulo(350,215,110,70,'green');
var rom= new rombo(400,400,50,'#563456');

//figuras fijas
var triFijo = new triangulo(800,200,50,'white');
var recFijo = new rectangulo(600,70,110,70,'white');
var hepFijo = new heptagono(650,250,50,"white")
var romFijo= new rombo(650,400,50,'white');
var cuadFijo = new cuadrado(750,50,90,'white');

var decFijo =new decagono(800,400,50,"white");
var hexFijo= new hexagono(930,100,50,"white");
var circFijo = new circulo(930,250,50,'white');
var penFijo= new pentagono(930,400,50,'white');


//-----------------------------------
//cargo arreglos de figuras movibles y fijas
figuras.push(tri,circ,cuad,dec,hep,hex,pen,rec,rom);
//figurasFijas.push(recFijo,hepFijo,romFijo,cuadFijo,triFijo,decFijo,hexFijo,circFijo,penFijo);

figurasFijas.push(triFijo,circFijo,cuadFijo,decFijo,hepFijo,hexFijo,penFijo,recFijo,romFijo);

//inicia tablero con dificultad seleccionada
function iniciar(dificultad){

  for (var i = 0; i < dificultad; i++) {
    figuras[i].dibujar();

      figurasFijas[i].dibujar();
      seleccion[i]=false;
    }

}




canvas.onmousedown=function(event){
  for (var i = 0; i < dificultad; i++){
    if(figuras[i].seleccionar(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop)){
      seleccion[i] = true;
      figuras[i].posX = event.clientX-canvas.offsetLeft;
      figuras[i].posY = event.clientY-canvas.offsetTop;
      break;
    }
  }


  canvas.onmousemove = function(event) {

      for (var i = 0; i < dificultad; i++) {

        if(seleccion[i]){
          figuras[i].posX = event.clientX-canvas.offsetLeft;
          figuras[i].posY = event.clientY-canvas.offsetTop;
          ctx.clearRect(0,0,canvas.width, canvas.height);

          for (var i = 0; i < dificultad; i++) {
            figuras[i].dibujar();
            figurasFijas[i].dibujar();

          }

        }
      }
    }
}
canvas.onmouseup = function(event) {

  canvas.onmousemove = null;

  for (var i = 0; i < dificultad; i++) {
    seleccion[i] = false;
  }
}
