/*
 Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). 
*/

function mostrar()
{
	let edad;
	let mensaje = "";

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13)
	{
		mensaje = "Es un niño.";
		//alert("Es un niño.");
	}
	else
	{
		if(edad >= 13 & edad <= 17)
		{
			mensaje = "Es un adolescente.";
			//alert("Es un adolescente.")
		}
		else
		{
			mensaje = "Es mayor de edad.";
			//alert("Es mayor de edad.")
		}
	}

	alert(mensaje);


}