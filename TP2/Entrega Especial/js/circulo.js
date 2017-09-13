
class circulo {
  constructor(x,y,radio,color) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color=color;
    this.id=2;
  }


}

circulo.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.strokeStyle="black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}



circulo.prototype.seleccionar=function(clix,cliy){
  var x =   Math.pow((clix-this.posX),2);
  var y =   Math.pow((cliy-this.posY),2);
  var d1 = Math.sqrt(x+y);
      return(d1<this.radio);

}
