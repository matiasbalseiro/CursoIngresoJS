/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value // el "=" asigna el valor de derecha a izquierda
	numeroDos = document.getElementById("txtIdNumeroDos").value

	numeroUno = parseInt(numeroUno) // parseInt convierte string a number
	numeroDos = parseInt(numeroDos)

	suma = numeroUno + numeroDos
	
	alert(suma)
}

