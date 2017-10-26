class taz {

  constructor(x,y) {
    this.x=x;
    this.y=y;
    this.div=document.getElementById("taz");
    this.left = this.x;
    this.right = this.x + this.div.offsetWidth;
    this.top = this.y;
    this.down = this.y + this.div.offsetHeight;
  }

}

taz.prototype.draw=function(){
    $("#taz").css("left",this.x.toString() + 'px');
}

 taz.prototype.update=function(){
   this.x -= 5;
   this.left = this.x;
   this.right = this.x + this.div.offsetWidth;
   this.top = this.y;
   this.down = this.y + this.div.offsetHeight;
   if(this.x < -60){
    this.x = Math.floor(Math.random() * (1600 - 1400 + 1)) + 800;

   }
 }
