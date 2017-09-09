var canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var seleccion=[];
var figuras =[];

var circ = new circulo(100,100,50,'brown');
var cuad = new cuadrado(50,200,100,'grey');
var rom= new rombo(400,400,50,'#563456');
var pol= new poligono(400,500,50,'yellow');
var rec = new rectangulo(50,400,100,50,'green');
var tri = new triangulo(300,400,50,'#877645');
//-----------------------------------
figuras.push(circ,cuad,rom,rec,tri,pol);
//figuras.push(circ);
for (var i = 0; i < figuras.length; i++) {
  figuras[i].dibujar();
  seleccion[i]=false;
}



//
//var sem1= new semicirculo(300,300,50);
//var circ1= new hexagono(200,200,100);
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
    if(figuras[i].seleccionar(event.clientX,event.clientY)){
      console.log("adentro");
      seleccion[i] = true;
      figuras[i].posX = event.clientX;
      figuras[i].posY = event.clientY;
      break;
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
