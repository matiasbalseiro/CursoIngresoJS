/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". 
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad == 15)
	{
		alert("niña bonita.");
	}
}