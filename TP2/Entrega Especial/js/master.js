
var ctx =document.getElementById("canvas").getContext("2d");

var cuad1 = new cuadrado(300,300,150,'grey');

var pol1= new poligono(200,200,100,'blue');



var circ1 = new circulo(700,400,30,'black');
var rec1 = new rectangulo(500,200,100,200,'red');

var sem1= new semicirculo(300,300,50);

var tri1 = new triangulo(200,200);
var rom= new rombo(550,200,100);
var hex= new hexagono(200,200,100);

cuad1.dibujar();
circ1.dibujar();
rec1.dibujar();
pol1.dibujar();
//rom.dibujar();


//sem1.dibujar();
//tri1.dibujar();

//hex.dibujar();


//circ1.dibujar(100,100,23);
