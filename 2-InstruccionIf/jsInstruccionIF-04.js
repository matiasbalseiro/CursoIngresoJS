/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 & edad <= 17)
	{
		alert("Usted es un adolescente.");
	}

	/*-----------------------------------------------
		ARITMETICOS: + - * / %
		RELACIONALES: == != > < >= <=
		RELACIONALES ESTRICTOS: === !==	
	
		Operador && 

    	F && F = F   se tienen que cumpliar las dos condiciones 
		F && V = F
		V && F = F
		V && V = V 

		Operador ||

		F || F = F   se tienen que cumpliar las dos condiciones 
		F || V = V
		V || F = V
		V || V = V

		Operador !
		!V = F
		!F = V
	*/


}//FIN DE LA FUNCIÓN