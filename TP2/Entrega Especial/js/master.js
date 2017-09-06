var ctx =document.getElementById("canvas").getContext("2d");

var cuad1 = new cuadrado(300,300,150)
var circ1 = new circulo(200,266,100);
var rec1 = new rectangulo(500,200,100,200);
var sem1= new semicirculo(300,300,50);

var pol1= new poligono(200,200);
var tri1 = new triangulo(200,200);
var rom= new rombo(200,200);
var hex= new hexagono(200,200);
//ctx.onload=circ1.dibujar();
//cuad1.dibujar();
//rec1.dibujar();
//pol1.dibujar();
//sem1.dibujar();
//tri1.dibujar();
//rom.dibujar();
hex.dibujar();
canvas.onmousedown=function(event){
  console.log(event);
  circ1.mousedown(event.clientX,event.clientY);

}
