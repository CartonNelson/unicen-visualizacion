var player=new bugs("nelson");
var escen=new escenario();
$( document ).ready(function() {


  $(document).keydown(function(e){
      switch (e.which){
      case 37:    //Flecha izquierda

          break;

      case 38:
          player.setMove("url(images/jump.png)","jump","steps(7)","1");

          break;

      case 39:    //Flecha derecha
      player.setMove("url(images/tinyBugs.png)","run","steps(6)","infinite");
      escen.setBackMove("backMove");
          break;


  }
  });

  $(document).keyup(function(e){
      switch (e.which){
      case 37:    //Flecha izquierda
          break;

      case 38:
      player.setMove("url(images/tinyBugs.png)","run","steps(6)","infinite");

          break;

      case 39:    //Flecha derecha
      player.setMove("url(images/tinyBugs.png)","quiet","steps(5)","infinite");
          escen.setBackMove("none");
          escen.apareceVillano();
          break;


  }
  });





});

  let url="url(images/tinyBugs.png)";
  let animationName="run";
  let steps="steps(6)";


  // function correr(){
  // $("#bugs").css("background",url);
  // $("#bugs").css("animation-name",animationName);
  // $("#bugs").css("animation-timing-function",steps );
  // }


  // let backStop="none";
  // let backMove="backMove"
  // function setBackMove(){
  //   $("#fondoDelante,#fondoLejano").css("animation-name",backMove);
  // }
