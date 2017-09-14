class cronometro {
  constructor() {
    this.centesimas = 0;
    this.segundos = 0;
    this.minutos = 0;
    this.horas = 0;
  }
};
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var control;
cronometro.prototype.inicio = function () {
  control = setInterval(this.cronometrar,10);
};

cronometro.prototype.parar = function () {
  this.segundos=segundos;
  this.minutos=minutos;
  this.horas=horas;
  clearInterval(control);
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
