/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	//nombreIngresado = txtIdNombre.value;
	nombreIngresado = document.getElementById("txtIdNombre").value; //document busca contenido del htlm//value trae el valor de la caja

	//alert("Su nombre es: " + nombreIngresado);
	alert(`Su nombre es: ${nombreIngresado}`);

}


