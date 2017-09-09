 class cuadrado {


   constructor(posX,posY,lado,color) {
    this.posX=posX;
    this.posY=posY;
    this.lado=lado;
    this.color=color;

  }



}
cuadrado.prototype.dibujar=function(){
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");

  ctx.fillStyle=this.color;
  ctx.beginPath();
  ctx.rect(this.posX,this.posY,this.lado,this.lado);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

cuadrado.prototype.seleccionar = function (clix,cliy) {
  var c=document.getElementById("canvas");
  var fig = c.getBoundingClientRect();
  return(this.posX < (clix - fig.left)) && (this.lado + this.posX > (clix - fig.left)) && (this.posY < (cliy- fig.top)) && (this.lado + this.posY > (cliy- fig.top));

}
