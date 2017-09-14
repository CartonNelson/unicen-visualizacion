
class circulo {
  constructor(x,y,radio,color,block) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color=color;
    this.id=2;
    this.block=block;
    this.imagen=new Image();
    this.imagen.src= "images/circulo.png";
  }


}
circulo.prototype.posInicial = function () {
  this.posX=100;
  this.posY=250;
  this.radio=50;
  this.color='brown';
};

circulo.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.strokeStyle="black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.closePath();
  if (this.block==false) {
    ctx.drawImage(this.imagen,this.posX - this.radio, this.posY - this.radio,this.radio * 2 , this.radio * 2);
  }


}



circulo.prototype.seleccionar=function(clix,cliy){
  var x =   Math.pow((clix-this.posX),2);
  var y =   Math.pow((cliy-this.posY),2);
  var d1 = Math.sqrt(x+y);
      return(d1<this.radio);

}
circulo.prototype.comparaFigura = function (c) {

  return(c==this.id);

}

circulo.prototype.colocar = function (posX,posY) {
  this.posX=posX;
  this.posY=posY;
  this.dibujar();
};
