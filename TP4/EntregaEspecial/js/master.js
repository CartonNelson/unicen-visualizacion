$( document ).ready(function() {





});

  let url="url(images/tinyBugs.png)";
  let animationName="run";
  let steps="steps(6)";


  function correr(){
  $("#bugs").css("background",url);
  $("#bugs").css("animation-name",animationName);
  $("#bugs").css("animation-timing-function",steps );
  } 


  let backStop="none";
  let backMove="backMove"
  function setBackMove(){
    $("#fondoDelante,#fondoLejano").css("animation-name",backMove);
  }
