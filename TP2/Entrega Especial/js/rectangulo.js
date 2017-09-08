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
  ctx.beginPath();

  ctx.rect(this.posX,this.posY,this.w,this.h);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
