/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	var numeroIngresado;
	var promedio;
	var contador = 0;
	var acumulador = 0; // SUMA
	var respuesta = "si";

	/*while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese numero: "));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("Desea ingresar un numero?: (si/no)").toLowerCase();
	}*/

	do {
		numeroIngresado = parseInt(prompt("Ingrese numero: "));
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
		respuesta = prompt("Desea ingresar un numero?: (si/no)").toLowerCase();
	} while (respuesta == "si");

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}