class cronometro {
  constructor() {

  }
};
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var control;
cronometro.prototype.inicio = function () {
  control = setInterval(this.cronometrar,10);
  //document.getElementById("inicio").disabled = true;
  //document.getElementById("parar").disabled = false;
  //document.getElementById("continuar").disabled = true;
  //document.getElementById("reinicio").disabled = false;
};

cronometro.prototype.parar = function () {
  clearInterval(control);
	//document.getElementById("parar").disabled = true;
	//document.getElementById("continuar").disabled = false;
};
cronometro.prototype.reinicio = function () {


	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	//document.getElementById("inicio").disabled = false;
	//document.getElementById("parar").disabled = true;
	//document.getElementById("continuar").disabled = true;
	//document.getElementById("reinicio").disabled = true;
};

cronometro.prototype.cronometrar = function () {
  if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
};
