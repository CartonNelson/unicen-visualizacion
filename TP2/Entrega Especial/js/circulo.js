class circulo {


constructor (x,y,radio){
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color="#141414";
  }

   dibujar(){
    var ctx=document.getElementById("canvas").getContext('2d');
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
    ctx.fill();
    ctx.closePath();

  }

}
