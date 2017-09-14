class rectangulo {
  constructor(posX,posY,w,h,color,block) {
    this.posX=posX;
    this.posY=posY;
    this.w=w;
    this.h=h;
    this.color=color;
    this.id=8;
    this.block=block;
    this.imagen=new Image();
    this.imagen.src= "images/rec.png";
  }


}

rectangulo.prototype.posInicial = function () {
  this.posX=350;
  this.posY=215;
  this.w=110;
  this.h=70;
  this.color='green';
};
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
  if (this.block==false) {
  ctx.drawImage(this.imagen,this.posX,this.posY,this.w,this.h);
  }
}

rectangulo.prototype.seleccionar = function (clix,cliy) {
  var c=document.getElementById("canvas");
  var fig = c.getBoundingClientRect();
  return (this.posX-canvas.offsetLeft < (clix - fig.left)) && (this.w + this.posX-canvas.offsetLeft > (clix - fig.left)) &&
  (this.posY-canvas.offsetTop < (cliy- fig.top)) && (this.h + this.posY-canvas.offsetTop > (cliy- fig.top));
  //(clix>=this.posX && clix<=this.posX+this.w && cliy>=this.posY && cliy<=this.posY+this.h);
}
rectangulo.prototype.comparaFigura = function (r) {

  return(r==this.id);

}

rectangulo.prototype.colocar = function (posX,posY) {
  this.posX=posX;
  this.posY=posY;
  this.dibujar();
};
