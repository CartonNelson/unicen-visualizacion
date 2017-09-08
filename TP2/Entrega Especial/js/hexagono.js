class hexagono {
  constructor(x,y,radio) {
    this.posX=x;
    this.posY=y;
    this.radio=radio;
  }


  setX(x){
    this.posX=x;
  }
  setY(y){
    this.posY=y;
  }
  dibujar(){

    var ctx=document.getElementById("canvas").getContext('2d');
    //
    ctx.fillStyle = "#6ab150";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;

        var X = 0;
        var Y = 0;
        var R = this.radio;

        var L = 6;
        // si L == 6 el ángulo es de 2π/6 o sea 60°
        var rad = (2*Math.PI)/L;
        // traslada el contexto en el centro del canvas
        // para poder girar el contexto alrededor del centro
        ctx.translate(this.posX, this.posY);
        //gira el contexto unos 270deg
        ctx.rotate(3*Math.PI/2);
        // dibuja el trazado
        ctx.beginPath();
            for(var i = 0; i < L; i++ ){
            var x = X + R * Math.cos( rad*i );
            var y = Y + R * Math.sin( rad*i );
            ctx.lineTo(x, y);
            }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        this.crearCirculo();
  }

  crearCirculo(){
    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.radio,0,Math.PI * 2);
      ctx.fill();
    ctx.closePath();
  }

  seleccion(clix,cliy){
    var x =   Math.pow((clix-this.posX),2);
    var y =   Math.pow((clix-this.posX),2);
    var d1 = Math.sqrt(x+y);

      return this.radio>d1;
  }

}
