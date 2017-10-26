class bugs {

  constructor(x,y) {
    this.x=x;
    this.y=y;
    this.div=document.getElementById("bugs");
    this.left = this.x;
    this.right = this.x + this.div.offsetWidth;
    this.top = this.y;
    this.bottom = this.y + this.div.offsetHeight;
    this.acel=0;
    this.vel=0;
    this.ground=true;

  }

}


bugs.prototype.update=function(){

this.vel+=this.acel;
this.y+=this.vel;
this.bottom = this.y + this.div.offsetHeight;
this.acel=0;
if (this.y>=340) {
  this.ground=true;
}

}
bugs.prototype.addAcel=function(acel){

this.acel+=acel;

}


bugs.prototype.draw=function(){
    $("#bugs").css("left",this.x.toString() + 'px');
    $("#bugs").css("top",this.y.toString() + 'px');
}


bugs.prototype.piso=function(){
if (this.y>=340) {
  this.vel*=0;
  this.y=340;
}
}

bugs.prototype.setMove=function(url,animationName,steps,duracion){
  $("#bugs").css("background",url);
  $("#bugs").css("animation-name",animationName);
  $("#bugs").css("animation-timing-function",steps );
  $("#bugs").css("animation-iteration-count",duracion );
  $("#bugs").css("top",this.y.toString() + 'px');
  $("#bugs").css("left",this.x.toString() + 'px');
  }

  bugs.prototype.salto=function(){
    var alturaMax=100;
    var alturaPiso = this.y;

    for (var i =alturaPiso ; i >alturaMax ; i--) {
        alturaPiso--;
        this.y=alturaPiso;
        }
    }


bugs.prototype.loose=function(taz){
return(!(this.x>taz.right||this.right<taz.left||this.y>taz.down||this.bottom<taz.top));
}
