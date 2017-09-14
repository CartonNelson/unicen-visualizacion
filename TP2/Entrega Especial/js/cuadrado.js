 class cuadrado {


   constructor(posX,posY,lado,color,block) {
    this.posX=posX;
    this.posY=posY;
    this.lado=lado;
    this.color=color;
    this.id=3;
    this.block=block;
    this.imagen=new Image();
    this.imagen.src= "images/cuadrado.png";

  }



}
cuadrado.prototype.posInicial = function () {
  this.posX=50;
  this.posY=350;
  this.radio=90;
  this.color='grey';
};
cuadrado.prototype.dibujar=function(){
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");

  ctx.fillStyle=this.color;
  ctx.beginPath();
  ctx.rect(this.posX,this.posY,this.lado,this.lado);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  if (this.block==false) {
  ctx.drawImage(this.imagen,this.posX,this.posY,this.lado,this.lado);  
  }

}

cuadrado.prototype.seleccionar = function (clix,cliy) {
  var c=document.getElementById("canvas");
  var fig = c.getBoundingClientRect();
  return(this.posX-canvas.offsetLeft < (clix - fig.left)) && (this.lado + this.posX-canvas.offsetLeft > (clix - fig.left)) &&
  (this.posY-canvas.offsetTop < (cliy- fig.top)) && (this.lado + this.posY-canvas.offsetTop > (cliy- fig.top));

}
cuadrado.prototype.comparaFigura = function (c) {

  return(c==this.id);

}

cuadrado.prototype.colocar = function (posX,posY) {
  this.posX=posX;
  this.posY=posY;
  this.dibujar();
};
