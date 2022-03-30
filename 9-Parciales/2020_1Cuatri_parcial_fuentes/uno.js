/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar() {
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var flagMasBaratoAlcohol = 0;
	var precioMasBaratoAlcohol;
	var cantidadMasBaratoAlcohol;
	var fabricanteMasBaratoAlcohol;
	var tipoBarbijoMasUnidades = 0;
	var tipoJabonMasUnidades = 0;
	var tipoAlcoholMasUnidades = 0;
	var tipoMasUnidades;
	var unidadesJabonTotal = 0;

	for (var i = 1; i < 5; i++) {

		do {
			tipo = prompt("Ingrese tipo: (barbijo/jabon/alcohol").toLowerCase();
		} while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol");

		do {
			precio = parseFloat(prompt("Ingrese precio: (entre 100 y 300"));
		} while (precio < 100 || precio > 300);

		do {
			cantidad = parseInt(prompt("Ingrese cantidad: (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
		} while (cantidad < 0 || cantidad > 1000);

		marca = prompt("Ingrese marca: ").toLowerCase();

		fabricante = prompt("Ingrese fabricante: ").toLowerCase();

		if (tipo == "alcohol" && flagMasBaratoAlcohol == 0) {
			precioMasBaratoAlcohol = precio;
			cantidadMasBaratoAlcohol = cantidad;
			fabricanteMasBaratoAlcohol = fabricante;
			flagMasBaratoAlcohol = 1;
		}
		else if (precioMasBaratoAlcohol < precio) {
			precioMasBaratoAlcohol = precio;
			cantidadMasBaratoAlcohol = cantidad;
			fabricanteMasBaratoAlcohol = fabricante;
		}

		if (tipo == "barbijo") {
			tipoBarbijoMasUnidades += cantidad;
		}
		else if (tipo == "jabon") {
			tipoJabonMasUnidades += cantidad;
		}
		else {
			tipoAlcoholMasUnidades += cantidad;
		}

		if (tipo == "jabon") {
			unidadesJabonTotal += cantidad;
		}

		if (tipoBarbijoMasUnidades > tipoJabonMasUnidades && tipoBarbijoMasUnidades > tipoAlcoholMasUnidades) {
			tipoMasUnidades = "barbijo";
		}
		else if (tipoJabonMasUnidades > tipoBarbijoMasUnidades && tipoJabonMasUnidades > tipoAlcoholMasUnidades) {
			tipoMasUnidades = "jabon";
		}
		else if (tipoAlcoholMasUnidades > tipoJabonMasUnidades && tipoAlcoholMasUnidades > tipoBarbijoMasUnidades) {
			tipoMasUnidades = "alcohol";

		}

		alert(`El alcohol mas barato que se vendio es de $${precioMasBaratoAlcohol}, con ${cantidadMasBaratoAlcohol} unidades y de fabricante ${fabricante}`);
		alert()
		alert(`Hay ${unidadesJabonTotal} jabones en total`);
	}
}
