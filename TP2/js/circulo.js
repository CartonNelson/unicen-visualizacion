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

  mousedown(clix,cliy){
    var x =   Math.pow((clix-this.posX),2);
    var y =   Math.pow((clix-this.posX),2);
    var d1 = Math.sqrt(x+y);

        if(d1<this.radio){
              console.log("atroden");
              }else{
                console.log("afuera padre");
              }

  }

}
