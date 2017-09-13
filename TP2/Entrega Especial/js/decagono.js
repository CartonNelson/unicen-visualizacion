class decagono {
  constructor(x,y,radio,color) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color=color;
    this.id=4;
  }
}
decagono.prototype.posInicial = function () {
  this.posX=250;
  this.posY=100;
  this.radio=50;
  this.color='red';
};
decagono.prototype.dibujar = function () {
  ctx.fillStyle = this.color;
  ctx.strokeStyle="black";
  ctx.lineWidth = 3;
  var L=10;
  var R =this.radio;
  var X = this.posX;
  var Y = this.posY;
  var rad = (2*Math.PI)/L;
  ctx.beginPath();
  for( var i = 0; i<L; i++ ){
  x = X + R * Math.cos( rad*i );
  y = Y + R * Math.sin( rad*i );
  ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};





  decagono.prototype.seleccionar = function (clix,cliy) {
    var x =   Math.pow((clix-this.posX),2);
    var y =   Math.pow((cliy-this.posY+20),2);
    var d1 = Math.sqrt(x+y);

      return (d1<this.radio);
  };

  decagono.prototype.comparaFigura = function (d) {

    return(d==this.id);

  }
  decagono.prototype.colocar = function (posX,posY) {
    this.posX=posX;
    this.posY=posY;
    this.dibujar();
  };
