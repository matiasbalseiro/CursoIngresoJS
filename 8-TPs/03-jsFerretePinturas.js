/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () // ºC = (ºF-32) ÷ 1.8
{
	var temperaturaF;
	var temperaturaC;

	temperaturaF = parseFloat(document.getElementById("txtIdTemperatura").value);

	temperaturaC = parseFloat((temperaturaF - 32) / 1.8);

	alert(temperaturaF.toFixed(2) + " Farenheit son " + temperaturaC.toFixed(2) + " Centigrados." );
}

function CentigradosFahrenheit () // ºF = ºC x 1.8 + 32
{
	var temperaturaF;
	var temperaturaC;

	temperaturaC = parseFloat(document.getElementById("txtIdTemperatura").value);

	temperaturaF = parseFloat((temperaturaC * 1.8) + 32);

	alert(`${temperaturaC.toFixed(2)} Centigrados son ${temperaturaF.toFixed(2)} Farenheit`);
}
