/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar() {
	var claveIngresada;
	/*claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") {
		claveIngresada = prompt("ingrese el número clave.");
	}
	alert ("Bienvenido.");*/

	do {
		claveIngresada = prompt("ingrese el número clave.");
	} while (claveIngresada != "utn750");
}//FIN DE LA FUNCIÓN
