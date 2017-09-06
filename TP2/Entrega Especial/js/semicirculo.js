class semicirculo {
  constructor(x,y,radio) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color="#141414";
  }

  dibujar(){
      var ctx=document.getElementById("canvas").getContext('2d');
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.radio, 0, Math.PI, false);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.strokeStyle = '#550000';
      ctx.stroke();
  }
}
