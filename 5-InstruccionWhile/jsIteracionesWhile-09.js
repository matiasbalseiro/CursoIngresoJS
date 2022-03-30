/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	
	var numeroIngresado;
	var maximo;
	var minimo;
	var respuesta;
	var flag = 0;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if (flag == 0) {
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			flag = 1;
		}

		if(numeroIngresado > maximo){
			maximo = numeroIngresado;
		}
		else if (numeroIngresado < minimo) {
			minimo = numeroIngresado;
		}

		/*if (flag == 0 || numeroIngresado > maximo) {
			maximo = numeroIngresado;
		}
		if (flag == 0 || numeroIngresado < minimo) {
			minimo = numeroIngresado;
			flag = 1;
		}*/

		respuesta = prompt("Desea ingresar otro numero? (s/n)").toLowerCase();
	} while (respuesta == 's');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}