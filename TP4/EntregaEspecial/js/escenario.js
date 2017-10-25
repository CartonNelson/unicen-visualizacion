class escenario {
  constructor() {

  }
}

escenario.prototype.setBackMove=function(comp){

        $("#fondoDelante,#fondoLejano").css("animation-name",comp);

  }

escenario.prototype.apareceVillano=function(){
  $(".fondoLejano").append('<div id="villano" class="taz"></div>');
}


// ('<div id="id" class="sparkLines">Some Stuff Here</div>')
