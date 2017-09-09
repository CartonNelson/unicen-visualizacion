class poligono {
  constructor(x,y,radio,color) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color=color;
  }
}


poligono.prototype.dibujar = function () {
            var R =this.radio;
					  var X = this.posX;
					  var Y = this.posY;
					  ctx.fillStyle = "#6ab150";
					  // un angulo de 60deg.
					  var rad = ( Math.PI / 180 ) * 60;
					  ctx.beginPath();
					  for( var i = 0; i<6; i++ ){
					  x = X + R * Math.cos( rad*i );
					  y = Y + R * Math.sin( rad*i );
					  ctx.lineTo(x, y);
					  }
					  ctx.closePath();
					  ctx.fill();
};

poligono.prototype.seleccionar=function(clix,cliy){
  var x =   Math.pow((clix-this.posX),2);
  var y =   Math.pow((cliy-this.posY),2);
  var d1 = Math.sqrt(x+y);
      return(d1<this.radio);

}
