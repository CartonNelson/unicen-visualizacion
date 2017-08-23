var grayscale = Filters.filterImage(Filter.grayscale, image);
// Note that ImageData values are clamped between 0 and 255, so we need
// to use a Float32Array for the gradient values because they
// range between -255 and 255.
var vertical = Filters.convoluteFloat32(grayscale,
  [ -1, 0, 1,
    -2, 0, 2,
    -1, 0, 1 ]);
var horizontal = Filters.convoluteFloat32(grayscale,
  [ -1, -2, -1,
     0,  0,  0,
     1,  2,  1 ]);
var final_image = Filters.createImageData(vertical.width, vertical.height);
for (var i=0; i<final_image.data.length; i+=4) {
  // make the vertical gradient red
  var v = Math.abs(vertical.data[i]);
  final_image.data[i] = v;
  // make the horizontal gradient green
  var h = Math.abs(horizontal.data[i]);
  final_image.data[i+1] = h;
  // and mix in some blue for aesthetics
  final_image.data[i+2] = (v+h)/4;
  final_image.data[i+3] = 255; // opaque alpha
}


function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}
