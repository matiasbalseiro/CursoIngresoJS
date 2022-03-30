/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro 
*/

function mostrar()
{
  var respuesta;
  var tipo;
  var cantidad;
  var precio;
  var descuento;
  var totalAPagarSinDescuento = 0;
  var totalAPagarConDescuento;
  var flagTipoMasCantidadBolsas = 0;
  var masCantidadBolsas;
  var tipoMasCantidadBolsas;
  var flagTipoMasCaro = 0;
  var precioMasCaro;
  var tipoMasCaro;

  do {

    do {
      tipo = prompt("Ingrese tipo de material: (arena/cal/cemento)").toLowerCase();
    } while (tipo == "arena" && tipo == "cal" && tipo == "cemento");

    do {
      cantidad = parseInt(prompt("Ingrese cantidad de bolsas"))
    } while (cantidad < 0);

    do {
      precio = parseFloat(prompt("Ingrese precio de la bolsa: (mas de cero)"));
    } while (precio < 0);

    totalAPagarSinDescuento += precio;

    if(flagTipoMasCantidadBolsas == 0){
      masCantidadBolsas = cantidad;
      tipoMasCantidadBolsas = tipo;
      flagTipoMasCantidadBolsas = 1;
    }
    else if (masCantidadBolsas < cantidad) {
      masCantidadBolsas = cantidad;
      tipoMasCantidadBolsas = tipo;
    }

    if(flagTipoMasCaro == 0){
      precioMasCaro = precio;
      tipoMasCaro = tipo;
      flagTipoMasCaro = 1;
    }
    else if (precioMasCaro < precio) {
      precioMasCaro = precio;
      tipoMasCaro = tipo;
    }

    respuesta = prompt("Desea seguir ingresando datos?: (s/n)").toLowerCase();
  } while (respuesta == 's');

  if(cantidad > 10){
    descuento = 15;
  }
  else if (cantidad > 30) {
    descuento = 25;
  }

  if (descuento != 0) {
    totalAPagarConDescuento = totalAPagarSinDescuento - (totalAPagarSinDescuento * descuento / 100);
    
  }
}
