class hexagono {
  constructor(x,y,radio) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
  }
}
hexagono.prototype.dibujar = function () {


  var numberOfSides = 6,
  size = this.radio,
  Xcenter = this.posX,
  Ycenter = this.posY;

ctx.beginPath();
ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
  ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

ctx.strokeStyle = "#000000";
ctx.lineWidth = 3;
ctx.stroke();
};




  hexagono.prototype.seleccionar = function (clix,cliy) {
    var x =   Math.pow((clix-this.posX),2);
    var y =   Math.pow((clix-this.posY),2);
    var d1 = Math.sqrt(x+y);

      return (d1<this.radio);
  };
