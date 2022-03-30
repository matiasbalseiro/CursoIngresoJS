/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	var sexoIngresado;
	//sexoIngresado = prompt("ingrese f ó m .").toLowerCase();

	/*while (sexoIngresado !== "f" && sexoIngresado !== "m") {
		sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	}
	if(sexoIngresado == 'f'){
		sexoIngresado = "Femenino";
	}
	else{
		sexoIngresado = "Masculino";
	}*/

	do {
		sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	} while (sexoIngresado !== "f" && sexoIngresado !== "m");
	
	if(sexoIngresado == 'f'){
		sexoIngresado = "Femenino";
	}
	else{
		sexoIngresado = "Masculino";
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN