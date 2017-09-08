function circulo(x,y,radio){
    this.posX=x;
    this.posY=y;
    this.radio=radio;
    this.color="#141414";
    //this.dibujar(this.posX,this.posY,this.radio);

  }

   circulo.prototype.dibujar=function(x,y,radio){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,this.radio,0,Math.PI * 2);
    ctx.fillStyle=this.color;
    ctx.fill();
    ctx.closePath();

  }

  var canvas= document.getElementById("canvas");
  var ctx= canvas.getContext("2d");
  var x = 300;
  var y = 300;
  var WIDTH = 900;
  var HEIGHT = 600;
  var dragok = false;

  //function rect(x,y,w,h) {
    //this.dibujar(x,y,100);
  //}



  function clear () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  circulo.prototype.init=function() {
    console.log("Hhhh");
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   return setInterval(draw, 2000);
  }

  function draw() {
   clear();
   this.dibujar(x - 15, y - 15, 300);
  }

  function myMove(e){
   if (dragok){
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;
   }
  }

  function myDown(e){
   if (e.pageX < x + 100 + canvas.offsetLeft && e.pageX > x - 100 +
   canvas.offsetLeft && e.pageY < y + 100 + canvas.offsetTop &&
   e.pageY > y -100 + canvas.offsetTop){
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;
    dragok = true;
    canvas.onmousemove = myMove;
   }
  }

  function myUp(){
   dragok = false;
   canvas.onmousemove = null;
  }

  //this.init();
  canvas.onmousedown = myDown;
  canvas.onmouseup = myUp;
