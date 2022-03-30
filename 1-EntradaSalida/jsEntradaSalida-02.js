/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre; //var puede estar fuera de {}   let si o si dentro
	var apellido;

	//lo que esta a la derecha le da el valor a lo de la izquierda
	nombre = prompt("Ingrese su nombre: "); //la funcion prompt recibe un mensaje - puede recibir dos parametros separados por ","
	apellido = prompt("Ingrese su apellido: ")

	//alert("Bienvenido " + nombre + " " + apellido);
	alert(`Bienvenido ${nombre} ${apellido}`); 

}

