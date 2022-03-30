/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {

	var respuesta;
	var numeroIngresado;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var cantidadPositivos = 0; // iterador
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var flagNegativos = 0;
	var flagPositivos = 0;


	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if (numeroIngresado == 0) {
			cantidadCeros++;
		}
		else if (numeroIngresado > 0) {
			//sumaPositivos += numeroIngresado;
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
			flagPositivos = 1;
		}
		else {
			//sumaNegativos += numeroIngresado;
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos++;
			flagNegativos = 1;
		}

		if (numeroIngresado % 2 == 0) {
			cantidadPares++;
		}

		respuesta = prompt("Desea ingresar otro numero? (s/n)").toLowerCase();
	} while (respuesta == "s");

	if (flagNegativos == 1) {
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	else {
		promedioNegativos = "No ingresaste ningun numero negativo.";
	}

	if (flagNegativos == 1) {
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	else {
		promedioNegativos = "No ingresaste ningun numero negativo.";
	}

	if (flagPositivos == 1) {
		promedioPositivos = sumaPositivos / cantidadPositivos;
	} else {
		promedioPositivos = "No ingresaste ningun numero positivo.";
	}


	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de positivos es: " + sumaPositivos + "<br>");
	document.write("la suma de negativos es: " + sumaNegativos + "<br>");
	document.write("la cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write("la cantidad de negativos es: " + cantidadNegativos + "<br>");
	document.write("la cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("la cantidad de numeros pares es: " + cantidadPares + "<br>");
	document.write("el promedio de positivos es: " + promedioPositivos + "<br>");
	document.write("el promedio de negativos es: " + promedioNegativos + "<br>");
	document.write("diferencia entre positivos y negativos: " + diferencia);
}//FIN DE LA FUNCIÓN