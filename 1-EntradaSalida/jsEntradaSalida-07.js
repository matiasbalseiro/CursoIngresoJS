/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	 var numeroUno;
	 var numeroDos;
	 var resultado;	

	 numeroUno = document.getElementById("txtIdNumeroUno").value;
	 numeroDos = document.getElementById("txtIdNumeroDos").value;

	 resultado = parseInt(numeroUno) + parseInt(numeroDos);

	 alert(resultado);
	
}

function restar()
{
	 var numeroUno;
	 var numeroDos;
	 var resultado;	

	 numeroUno = document.getElementById("txtIdNumeroUno").value;
	 numeroDos = document.getElementById("txtIdNumeroDos").value;

	 resultado = parseInt(numeroUno) - parseInt(numeroDos);

	 alert(resultado);
}

function multiplicar()
{ 
	 var numeroUno;
	 var numeroDos;
	 var resultado;	

	 numeroUno = document.getElementById("txtIdNumeroUno").value;
	 numeroDos = document.getElementById("txtIdNumeroDos").value;

	 resultado = parseInt(numeroUno) * parseInt(numeroDos);

	 alert(resultado);
}

function dividir()
{
	var numeroUno;
	 var numeroDos;
	 var resultado;	

	 numeroUno = document.getElementById("txtIdNumeroUno").value;
	 numeroDos = document.getElementById("txtIdNumeroDos").value;

	 resultado = parseInt(numeroUno) / parseInt(numeroDos);

	 alert(resultado);
}

