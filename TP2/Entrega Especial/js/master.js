var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var seleccion=[];
var figuras =[];

var circ = new circulo(100,100,50,'black');
var cuad = new cuadrado(50,200,100,'grey');
var rom= new rombo(100,400,50,'#563456');
var pol= new poligono(100,500,50,'blue');
var rec = new rectangulo(50,600,100,50,'red');
//-----------------------------------
figuras.push(circ,cuad,rom,pol,rec);
console.log(figuras);
for (var i = 0; i < figuras.length; i++) {
  figuras[i].dibujar();
  seleccion[i]=false;
}



//
//var sem1= new semicirculo(300,300,50);
//var circ1= new hexagono(200,200,100);
//var circ1 = new triangulo(100,600,100,'#877645');
//

//cuad1.dibujar();
//rec1.dibujar();
//pol1.dibujar();
//rom.dibujar();
//tri1.dibujar();


canvas.onmousedown=function(event){
  console.log(event);
  for (var i = 0; i < figuras.length; i++){
    if(figuras[i].seleccionar(event.clientX,event.clientY)){
      console.log("adentro");
      seleccion[i] = true;
      figuras[i].x = event.clientX;
      figuras[i].y = event.clientY;
    }else{
      console.log("afuera");
    }
  }


  canvas.onmousemove = function(event) {

      for (var i = 0; i < figuras.length; i++) {

        if(seleccion[i]){
          figuras[i].posX = event.clientX;
          figuras[i].posY = event.clientY;
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
