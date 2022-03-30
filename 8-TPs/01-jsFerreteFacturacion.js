/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precioUno + precioDos + precioTres;

    alert(`La suma es: ${resultado.toFixed(2)}`);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precioUno + precioDos + precioTres;

    promedio = resultado / 3;

    alert(`El promedio es: ${promedio.toFixed(2)}`);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precioUno + precioDos + precioTres;

    precioFinal = resultado + (resultado * 0.21);

    alert(`La suma es: ${precioFinal.toFixed(2)}`);
}