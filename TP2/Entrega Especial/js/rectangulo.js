class rectangulo {
  constructor(posX,posY,w,h) {
    this.posX=posX;
    this.posY=posY;
    this.width=w;
    this.height=h;
  }

  dibujar(){
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.rect(this.posX,this.posY,this.width,this.height);
    ctx.stroke();
  }
}
