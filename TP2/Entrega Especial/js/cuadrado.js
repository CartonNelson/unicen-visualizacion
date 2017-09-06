class cuadrado {


   cuadrado(posX,posY,lado) {
    this.posX=posX;
    this.posY=posY;
    this.width=lado;
    this.height=lado;

  }

  dibujar(){
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.rect(this.posX,this.posY,this.width,this.height);
    ctx.stroke();
  }

};
