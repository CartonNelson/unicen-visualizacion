

var player=new bugs(500,340);
var escen=new escenario();
var tazz = new taz(1200,340);

var gravedad=0.25;

function update() {
  tazz.update();
  player.update();
  player.addAcel(gravedad);
  player.piso();


  if (player.loose(tazz)) {
    $("#cartel").css("display","block");
    $("#cartel").fadeIn();
    ganador.innerHTML="Has perdido!!";
    player.setMove("url(images/tinyBugs.png)","die","steps(4)","infinite");
    escen.setBackMove("none");

  }

}

function draw() {
    tazz.draw();
    player.draw();
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}




  $(document).keydown(function(e){
      switch (e.which){
      case 37:    //Flecha izquierda

          break;

      case 38:
      if(player.ground){
        player.ground=false;
        player.addAcel(-7);
          player.setMove("url(images/jump.png)","jump","steps(7)","0.9");
      }


          break;

      case 39:    //Flecha derecha
      requestAnimationFrame(mainLoop);
      player.setMove("url(images/tinyBugs.png)","run","steps(6)","infinite");
      escen.setBackMove("backMove");
          break;


  }
  });

  $(document).keyup(function(e){
      switch (e.which){
      case 38:
      player.setMove("url(images/tinyBugs.png)","run","steps(6)","infinite");

          break;

  }
  });
