class rectangulo {
  constructor(posX,posY,w,h,color) {
    this.posX=posX;
    this.posY=posY;
    this.w=w;
    this.h=h;
    this.color=color;
  }


}
rectangulo.prototype.dibujar=function(){
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  ctx.fillStyle=this.color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(this.posX,this.posY,this.w,this.h);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

rectangulo.prototype.seleccionar = function (clix,cliy) {
  var c=document.getElementById("canvas");
  var fig = c.getBoundingClientRect();
  return (this.posX < (clix - fig.left)) && (this.w + this.posX > (clix - fig.left)) &&
  (this.posY < (cliy- fig.top)) && (this.h + this.posY > (cliy- fig.top));
  //(clix>=this.posX && clix<=this.posX+this.w && cliy>=this.posY && cliy<=this.posY+this.h);
}
