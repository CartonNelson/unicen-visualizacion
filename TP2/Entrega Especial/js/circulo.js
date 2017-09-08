
class circulo {
  constructor(x,y,radio,color) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color=color;
  }


}

circulo.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}




circulo.prototype.detectarPunto = function (clientX,clientY) {
  //formula p detectar la ubicacion del mouse dentro del circulo
 var a = Math.pow((clientX-this.posX),2);
 var b = Math.pow((clientY-this.posY),2);
 var c = a + b;
 var result = Math.sqrt(c);
 return this.radio > result;


}
