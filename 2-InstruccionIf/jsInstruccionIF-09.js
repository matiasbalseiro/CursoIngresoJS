/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive 
*/

function mostrar()
{
	var numero;

	numero = alert(Math.floor(Math.random() * 10) + 1);

	alert(numero);
}//FIN DE LA FUNCIÓN