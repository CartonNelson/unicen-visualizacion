
var ctx = document.getElementById("canvas").getContext("2d");
var ctxOrigen = document.getElementById("canvasOrigen").getContext("2d");
var imagen = new Image();
var filtroAplicado=false;




//cargo imagen
//utilizo filereader para poder acceder a imagenes fuera de la carpeta del proyecto
function cargarImg(){
//imagen.src = document.getElementById("img").files[0].name;
var file=document.querySelector("#img");
var reader = new FileReader();
reader.onload=function(e){
  imagen.width=canvas.width ;
   imagen.height =canvas.height;
  imagen.src=e.target.result;
  $("#img").attr("src",target.result);
}

reader.readAsDataURL(file.files[0]);
  imagen.onload=function(){
    //ctx.clearRect(0,0,canvas.width,canvas.height);//vaciar canvas
    imagen.width=canvas.width;
    imagen.height=canvas.height;
    myDrawImageMethod(this);
  }

}

//dibuja la imagen
function myDrawImageMethod(img){
ctx.drawImage(img, 0, 0, img.width,img.height);
ctxOrigen.drawImage(img, 0, 0, img.width,img.height);
setBrillo();
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/**
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById('descarga').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'ImgModificada.png');
}, false);


(function ($) {
  $('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  });
})(jQuery);


//genero imagen
function setPixel (imageData,x,y,r,g,b,a){

  index = (x + y * imageData.width) *4 ;
  imageData.data[index+0] =r;
  imageData.data[index+1] =g;
  imageData.data[index+2] =b;
  imageData.data[index+3] =a;
}


//obtengo r,g,b de cada pixel
function getRed(imageData,x,y){
index = (x+y*imageData.width)*4;
return imageData.data[index+0];
}

function getGreen(imageData,x,y){
index = (x+y*imageData.width)*4;
return imageData.data[index+1];
}

function getBlue(imageData,x,y){
index = (x+y*imageData.width)*4;
return imageData.data[index+2];
}

function origen(){
 myDrawImageMethod(imagen);
 $('#cantBrillo').val("");
}

//aplico el filtro negativo
function negativo(){
  imageData = ctxOrigen.getImageData(0,0,imagen.width,imagen.height);
  for (x=0 ; x<imagen.width; x++){
    for (y=0; y<imagen.height; y++){
      var r=getRed(imageData,x,y);
      var g=getGreen(imageData,x,y);
      var b=getBlue(imageData,x,y);
      setPixel(imageData,x,y,(255-r),(255-g),(255-b),255);
    }
  }
  //vuelvo a dibujar la img con el filtro aplicado
  ctx.putImageData(imageData,0,0);
  $('#cantBrillo').val("");
  filtroAplicado=true;
}


//funcion saturado con valor fijo de 2.2
function saturar(){

  imageData = ctxOrigen.getImageData(0,0,canvas.width,canvas.height);

  for (x=0 ; x<canvas	.width; x++){
    for (y=0; y<canvas.height; y++){

      var r=getRed(imageData,x,y);
      var g=getGreen(imageData,x,y);
      var b=getBlue(imageData,x,y);
      var rgb=[r,g,b];
      var hsv= RGBtoHSV (rgb);
      hsv[1] *= 2.2;
      var rgb= HSVtoRGB(hsv);
      r=rgb[0];
      g=rgb[1];
      b=rgb[2];

      setPixel(imageData,x,y,r,g,b,255);
    }
  }
  //vuelvo a dibujar la img con el filtro aplicado


    ctx.putImageData(imageData,0,0);
    $('#cantBrillo').val("");
    filtroAplicado=true;
  }



function RGBtoHSV (color) {
        var r,g,b,h,s,v;
        r= color[0];
        g= color[1];
        b= color[2];
        min = Math.min( r, g, b );
        max = Math.max( r, g, b );


        v = max;
        delta = max - min;
        if( max != 0 )
            s = delta / max;        // s
        else {
            // r = g = b = 0        // s = 0, v is undefined
            s = 0;
            h = -1;
            return [h, s, undefined];
        }
        if( r === max )
            h = ( g - b ) / delta;      // between yellow & magenta
        else if( g === max )
            h = 2 + ( b - r ) / delta;  // between cyan & yellow
        else
            h = 4 + ( r - g ) / delta;  // between magenta & cyan
        h *= 60;                // degrees
        if( h < 0 )
            h += 360;
        if ( isNaN(h) )
            h = 0;
        return [h,s,v];
    }

    function HSVtoRGB (color) {
        var i;
        var h,s,v,r,g,b;
        h= color[0];
        s= color[1];
        v= color[2];
        if(s === 0 ) {
            // achromatic (grey)
            r = g = b = v;
            return [r,g,b];
        }
        h /= 60;            // sector 0 to 5
        i = Math.floor( h );
        f = h - i;          // factorial part of h
        p = v * ( 1 - s );
        q = v * ( 1 - s * f );
        t = v * ( 1 - s * ( 1 - f ) );
        switch( i ) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            default:        // case 5:
                r = v;
                g = p;
                b = q;
                break;
        }
        return [r,g,b];
    }







//aplico filtro sepia
function sepia(){
  imageData = ctxOrigen.getImageData(0,0,canvas.width,canvas.height);

  for (x=0 ; x<canvas	.width; x++){
    for (y=0; y<canvas.height; y++){

      var r=getRed(imageData,x,y);
      var g=getGreen(imageData,x,y);
      var b=getBlue(imageData,x,y);
      var pixel=((r*0.3)+(g*0.59)+(b*0.11));
      setPixel(imageData,x,y,pixel+100,pixel+50,pixel,255);
    }
  }
  //vuelvo a dibujar la img con el filtro aplicado

  //ctx.putImageData(imageData,0,0,);
    ctx.putImageData(imageData,0,0);
    $('#cantBrillo').val("");
    filtroAplicado=true;
}


function blurComun(){

    var sobel_x=[  1/9, 1/9,  1/9,
                1/9,  1/9, 1/9,
                1/9, 1/9,  1/9 ];
      console.log(sobel_x);

    var imageData = ctxOrigen.getImageData(0,0,imagen.width,imagen.height);
    var aux = ctx.getImageData(0,0,imagen.width,imagen.height);

    for (x=1 ; x<imagen.width-1; x++){
      for (y=1; y<imagen.height-1; y++){
        //var pixel=getRed(imageData,x,y);

        var r = ((sobel_x[0,0]*getRed(imageData,(x-1),(y-1)))+(sobel_x[1,0]*getRed(imageData,x,(y-1)))+(sobel_x[2,0]*getRed(imageData,(x+1),(y-1))))+
        ((sobel_x[0,1]*getRed(imageData,x,(y-1)))+(sobel_x[1,1]*getRed(imageData,x,y))+(sobel_x[2,1]*getRed(imageData,x,(y+1))))+
        ((sobel_x[0,2]*getRed(imageData,(x-1),(y+1)))+(sobel_x[1,2]*getRed(imageData,x,(y+1)))+(sobel_x[2,2]*getRed(imageData,(x+1),(y+1))));

        var g = ((sobel_x[0,0]*getGreen(imageData,(x-1),(y-1)))+(sobel_x[1,0]*getGreen(imageData,x,(y-1)))+(sobel_x[2,0]*getGreen(imageData,(x+1),(y-1))))+
        ((sobel_x[0,1]*getGreen(imageData,x,(y-1)))+(sobel_x[1,1]*getGreen(imageData,x,y))+(sobel_x[2,1]*getGreen(imageData,x,(y+1))))+
        ((sobel_x[0,2]*getGreen(imageData,(x-1),(y+1)))+(sobel_x[1,2]*getGreen(imageData,x,(y+1)))+(sobel_x[2,2]*getGreen(imageData,(x+1),(y+1))));

        var b = ((sobel_x[0,0]*getBlue(imageData,(x-1),(y-1)))+(sobel_x[1,0]*getBlue(imageData,x,(y-1)))+(sobel_x[2,0]*getBlue(imageData,(x+1),(y-1))))+
        ((sobel_x[0,1]*getBlue(imageData,x,(y-1)))+(sobel_x[1,1]*getBlue(imageData,x,y))+(sobel_x[2,1]*getBlue(imageData,x,(y+1))))+
        ((sobel_x[0,2]*getBlue(imageData,(x-1),(y+1)))+(sobel_x[1,2]*getBlue(imageData,x,(y+1)))+(sobel_x[2,2]*getBlue(imageData,(x+1),(y+1))));

        setPixel(aux,x,y,r,g,b,255);

      }
    }
    ctx.putImageData(aux,0,0);
    $('#cantBrillo').val("");
    filtroAplicado=true;


}



function blurByN(){

    var sobel_x=[  1/9, 1/9,  1/9,
                1/9,  1/9, 1/9,
                1/9, 1/9,  1/9 ];


    var imageData = ctxOrigen.getImageData(0,0,imagen.width,imagen.height);
    var aux = ctx.getImageData(0,0,imagen.width,imagen.height);

    for (x=1 ; x<imagen.width-1; x++){
      for (y=1; y<imagen.height-1; y++){
        //var pixel=getRed(imageData,x,y);

        var pixel = ((sobel_x[0,0]*getRed(imageData,(x-1),(y-1)))+(sobel_x[1,0]*getRed(imageData,x,(y-1)))+(sobel_x[2,0]*getRed(imageData,(x+1),(y-1))))+
        ((sobel_x[0,1]*getRed(imageData,x,(y-1)))+(sobel_x[1,1]*getRed(imageData,x,y))+(sobel_x[2,1]*getRed(imageData,x,(y+1))))+
        ((sobel_x[0,2]*getRed(imageData,(x-1),(y+1)))+(sobel_x[1,2]*getRed(imageData,x,(y+1)))+(sobel_x[2,2]*getRed(imageData,(x+1),(y+1))));

        setPixel(aux,x,y,pixel,pixel,pixel,255);

      }
    }
    ctx.putImageData(aux,0,0);
    $('#cantBrillo').val("");
    filtroAplicado=true;

}


//aplico binarizacion
function binarizacion(){
  imageData = ctxOrigen.getImageData(0,0,imagen.width,imagen.height);

  for (x=0 ; x<imagen.width; x++){
    for (y=0; y<imagen.height; y++){

      var r=((getRed(imageData,x,y)));
      var g=((getGreen(imageData,x,y)));
      var b=((getBlue(imageData,x,y)));
      var grayScale =  (0.299 * r + 0.587 * g + 0.114 * b);
      if(grayScale>120){
        r=255;
        g=255;
        b=255;
      }else{
        r=0;
        g=0;
        b=0;
      }
      setPixel(imageData,x,y,r,g,b,255);
    }
  }
  //vuelvo a dibujar la img con el filtro aplicado
  ctx.putImageData(imageData,0,0);
  $('#cantBrillo').val("");
  filtroAplicado=true;
}

//aplico brillo ingresado por usuario
function subirBrillo(){
  if (filtroAplicado) {
    imageData = ctx.getImageData(0,0,imagen.width,imagen.height);
  }else{
    imageData = ctxOrigen.getImageData(0,0,imagen.width,imagen.height);
  }


  var cant=+document.getElementById("cantBrillo").value;

  console.log(cant);
  for (x=0 ; x<imagen.width; x++){
    for (y=0; y<imagen.height; y++){

      var r=((getRed(imageData,x,y))+cant);
      var g=((getGreen(imageData,x,y))+cant);
      var b=((getBlue(imageData,x,y))+cant);
      setPixel(imageData,x,y,r,g,b,255);
    }
  }
  //vuelvo a dibujar la img con el filtro aplicado
  ctx.putImageData(imageData,0,0);

}


//seteo brillo
function setBrillo(){
$('#cantBrillo').val("");

}


//aplico el filtro ByN
function blancoYnegro(){
  imageData = ctxOrigen.getImageData(0,0,imagen.width,imagen.height);
  for (x=0 ; x<imagen.width; x++){
    for (y=0; y<imagen.height; y++){
      var pixelbyn=(getRed(imageData,x,y)+getGreen(imageData,x,y)+getBlue(imageData,x,y)/3);
      setPixel(imageData,x,y,pixelbyn,pixelbyn,pixelbyn,255);
    }
  }
  //vuelvo a dibujar la img con el filtro aplicado
  ctx.putImageData(imageData,0,0);
  $('#cantBrillo').val("");
  filtroAplicado=true;
}
