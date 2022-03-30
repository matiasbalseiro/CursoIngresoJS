/*
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado,
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar() {

	var i;
	var numero;
	var contadorPares = 0;

	numero = parseInt(prompt("Ingrese un numero: "));

	for (i = 0; i <= numero; i++) {
		if(i % 2 == 0 && i != 0){
			contadorPares++;
			console.log(i);
		}
	}
	console.log("pares encontrados:" + contadorPares);
	
}//FIN DE LA FUNCIÓN