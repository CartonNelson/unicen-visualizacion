var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var seleccion=[];
var figuras =[];

var circ = new circulo(100,100,50,'brown');
var cuad = new cuadrado(50,200,100,'grey');
var rom= new rombo(400,400,50,'#563456');
var pen= new pentagono(200,200,50,'yellow');
var rec = new rectangulo(50,400,110,70,'green');
var tri = new triangulo(300,400,40,'#877645');
var hex= new hexagono(300,200,50,"orange");
var hep = new heptagono(300,100,50,"violet")
var dec =new decagono(100,500,50,"red");
//-----------------------------------
figuras.push(circ,cuad,rom,hex,rec,tri,pen,hep);
//figuras.push(circ);
for (var i = 0; i < figuras.length; i++) {
  figuras[i].dibujar();
  seleccion[i]=false;
}



//
//var sem1= new semicirculo(300,300,50);
//
//
//

//cuad1.dibujar();
//rec1.dibujar();
//pol1.dibujar();
//rom.dibujar();
//tri1.dibujar();


canvas.onmousedown=function(event){
  console.log(event);
  for (var i = 0; i < figuras.length; i++){
    if(figuras[i].seleccionar(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop)){
      console.log("adentro");
      seleccion[i] = true;
      figuras[i].posX = event.clientX-canvas.offsetLeft;
      figuras[i].posY = event.clientY-canvas.offsetTop;
      break;
    }else{
      console.log("afuera");
    }
  }


  canvas.onmousemove = function(event) {

      for (var i = 0; i < figuras.length; i++) {

        if(seleccion[i]){
          figuras[i].posX = event.clientX-canvas.offsetLeft;
          figuras[i].posY = event.clientY-canvas.offsetTop;
          ctx.clearRect(0,0,canvas.width, canvas.height);
          for (var i = 0; i < figuras.length; i++) {
            figuras[i].dibujar();
          }

        }
      }
    }
}
canvas.onmouseup = function(event) {
  canvas.onmousemove = null;
  for (var i = 0; i < figuras.length; i++) {
    seleccion[i] = false;
  }
}
