/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta = "si";
	var sumaPositivos = 0;
	var multiplicacionNegativos = 1;
	var flag = 0;

	/*while (respuesta == "si"){
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("Desea agregar otro numero?").toLowerCase();
	}*/

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			flag = 1;
		}

		respuesta = prompt("Desea agregar otro numero?: (si/no)").toLowerCase();
	} while (respuesta == "si");

	if (flag == 0) {
		multiplicacionNegativos = 0;
	}


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}