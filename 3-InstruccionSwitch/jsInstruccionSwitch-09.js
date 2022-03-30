/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento 
*/

function mostrar() {
	var estacionIngresada;
	var destinoIngresado;
	var precioFinal;
	var ajustePrecio;
	const PRECIO = 15000;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					ajustePrecio = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					ajustePrecio = -10;
					break;
				case "Mar del plata":
					ajustePrecio = -20;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					ajustePrecio = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					ajustePrecio = 10;
					break;
				case "Mar del plata":
					ajustePrecio = 20;
					break;
			}
			break;
		case "Otoño":
			switch (destinoIngresado) {
				case "Bariloche":
					ajustePrecio = 10;
					break;
				case "Cataratas":
					ajustePrecio = 10;
					break;
				case "Cordoba":
					ajustePrecio = 0;
					break;
				case "Mar del plata":
					ajustePrecio = 10;
					break;
			}
			break;
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					ajustePrecio = 10;
					break;
				case "Cataratas":
					ajustePrecio = 10;
					break;
				case "Cordoba":
					ajustePrecio = 0;
					break;
				case "Mar del plata":
					ajustePrecio = 10;
					break;
			}
			break;
	}

	precioFinal = PRECIO + (PRECIO * ajustePrecio / 100);

	alert(`El precio del pasaje es de $${precioFinal}`);
}//FIN DE LA FUNCIÓN