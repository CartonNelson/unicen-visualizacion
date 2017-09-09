class triangulo {
  constructor(x,y,radio,color) {
    this.posX=x;
    this.posY=y;
    this.color=color;
    this.radio=radio;

  }
}

  triangulo.prototype.dibujar=function(){

    // triangle 4, at right, top
     ctx.beginPath();
     ctx.arc(this.posX,this.posY+100,this.radio,0,Math.PI * 2);
     ctx.strokeStyle = "#00F";
     ctx.moveTo(this.posX, this.posY); // pick up "pen," reposition at 500 (horiz), 0 (vert)
     ctx.lineTo(this.posX-100,this.posY+200); // draw straight down by 200px (200 + 200)
     ctx.lineTo(this.posX+100, this.posY+200); // draw up toward left (100 less than 300, so left)
     ctx.closePath(); // connect end to start
     ctx.stroke(); // outline the shape that's been described

}



triangulo.prototype.seleccionar = function (clix,cliy) {
  //var c=document.getElementById("canvas");
  //var fig = c.getBoundingClientRect();
  //return(this.posX < (clix - fig.left)) && (this.lado + this.posX > (clix - fig.left)) && (this.posY < (cliy- fig.top)) && (this.lado + this.posY > (cliy- fig.top));
  var x =   Math.pow((clix-this.posX),2);
  var y =   Math.pow((cliy-this.posY+100),2);
  var d1 = Math.sqrt(x+y);
  
      return(d1<100);

};
