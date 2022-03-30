/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var total;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (ancho + largo) * 2;

    total = perimetro * 3;

    alert(`La cantidad de alambre a comprar es: ${total.toFixed(2)}`);
}
function Circulo () 
{
	var radio;
    var perimetro;
    var total;
    const PI = Math.PI

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    total = perimetro * 3;

    alert(`La cantidad de alambre a comprar es: ${total.toFixed(2)}`);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var bolsasCemento
    var bolsasCal
    const METRO_CUADRADO_CEMENTO = 2;
    const METRO_CUADRADO_CAL = 3;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    area = largo * ancho;

    bolsasCemento = area * METRO_CUADRADO_CEMENTO;
    bolsasCal = area * METRO_CUADRADO_CAL;

    alert(`Comprar ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal.`);
}