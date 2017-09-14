class triangulo {
  constructor(x,y,radio,color,block) {
    this.posX=x;
    this.posY=y;
    this.color=color;
    this.radio=radio;
    this.id=1;
    this.block=block;
    this.imagen=new Image();
    this.imagen.src= "images/triangulo.png";

  }
}

  triangulo.prototype.posInicial = function () {
    this.posX=100;
    this.posY=50;
    this.radio=50;
    this.color='#877645';
  };

  triangulo.prototype.dibujar=function(){

    // triangle 4, at right, top
    ctx.fillStyle=this.color;
    ctx.strokeStyle="black";
    ctx.lineWidth = 3;
     ctx.beginPath();

     //ctx.strokeStyle = "#00F";
     ctx.moveTo(this.posX, this.posY); // pick up "pen," reposition at 500 (horiz), 0 (vert)
     ctx.lineTo(this.posX-this.radio,this.posY+(this.radio*2)); // draw straight down by 200px (200 + 200)
     ctx.lineTo(this.posX+this.radio, this.posY+(this.radio*2)); // draw up toward left (100 less than 300, so left)
     ctx.closePath(); // connect end to start
     ctx.fill();
     ctx.stroke(); // outline the shape that's been described
     if (this.block==false) {
       ctx.drawImage(this.imagen,this.posX -this.radio, this.posY ,this.radio * 2 , this.radio * 2);
     }

}



triangulo.prototype.seleccionar = function (clix,cliy) {
var ax=this.posX;
var ay=this.posY;
var bx=this.posX-this.radio;
var by=this.posY+(this.radio*2);
var cx=this.posX+this.radio;
var cy=this.posY+(this.radio*2);
var v0 = [cx-ax,cy-ay];
var v1 = [bx-ax,by-ay];
var v2 = [clix-ax,cliy-ay];

var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);

var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);

var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

return ((u >= 0) && (v >= 0) && (u + v < 1));

};
triangulo.prototype.comparaFigura = function (t) {
  return(t==this.id);

}

triangulo.prototype.colocar = function (posX,posY) {
  this.posX=posX;
  this.posY=posY;
  this.dibujar();
};
