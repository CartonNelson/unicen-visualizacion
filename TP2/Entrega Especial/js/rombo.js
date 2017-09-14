class rombo {
  constructor(x,y,radio,color,block) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color=color;
    this.id=9;
    this.block=block;
    this.imagen=new Image();
    this.imagen.src= "images/rombo.png";

  }
}

rombo.prototype.posInicial = function () {
  this.posX=400;
  this.posY=400;
  this.radio=50;
  this.color='#563456';
};
rombo.prototype.dibujar=function(){
  var ctx=document.getElementById("canvas").getContext('2d');
  //
  ctx.fillStyle = this.color;
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;

      var X = this.posX;
      var Y = this.posY;
      var R = this.radio;

      var L = 4;
      // si L == 6 el ángulo es de 2π/6 o sea 60°
      var rad = (2*Math.PI)/L;
      ctx.beginPath();
          for(var i = 0; i < L; i++ ){
          var x = X + R * Math.cos( rad*i );
          var y = Y + R * Math.sin( rad*i );
          ctx.lineTo(x, y);
          }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      if (this.block==false) {
        ctx.drawImage(this.imagen,this.posX - this.radio, this.posY - this.radio,this.radio * 2 , this.radio * 2);
      }
}
rombo.prototype.seleccionar=function(clix,cliy){
  var x =   Math.pow((clix-this.posX),2);
  var y =   Math.pow((cliy-this.posY+20),2);
  var d1 = Math.sqrt(x+y);
      return(d1<this.radio);

}


rombo.prototype.comparaFigura = function (r) {

  return(r==this.id);

}

rombo.prototype.colocar = function (posX,posY) {
  this.posX=posX;
  this.posY=posY;
  this.dibujar();
};
