/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. 
*/

function mostrar() {
	var numeroIngresado;
	var contador = 0; // suma literales, valor fijo
	var acumulador = 0; // suma variables
	var promedio;

	while (contador < 5) {
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN