class bugs {

  constructor(nombre) {
    this.nombre=nombre;
  }

}
bugs.prototype.setMove=function(url,animationName,steps,duracion){
  $("#bugs").css("background",url);
  $("#bugs").css("animation-name",animationName);
  $("#bugs").css("animation-timing-function",steps );
  $("#bugs").css("animation-iteration-count",duracion );
  }
