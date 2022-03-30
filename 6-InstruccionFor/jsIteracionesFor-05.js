/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. 
*/

function mostrar() {
	var numero;

	for (; ;) {
		numero = prompt(parseInt("Ingrese un numero: "));

		if (numero == 9) {
			break;

		}
	}



}//FIN DE LA FUNCIÓN