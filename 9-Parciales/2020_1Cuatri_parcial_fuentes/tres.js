/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. 
*/

function mostrar()
{
	var respuesta;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var flagMayorTemperatura = 0;
	var nombreMayorTemperatura;
	var temperaturaMayor;
	var mayorEdadViudo = 0;
	var hombresNoCasados = 0;
	var terceraEdadConFiebre = 0;
	var hombresSolteros = 0;
	var sumaEdades = 0;
	var promedioEdadHombresSolteros;

	do {
		nombre = prompt("Ingrese nombre: ").toLowerCase();
		edad = parseInt(prompt("Ingrese edad: "));

		do {
			sexo = prompt("Ingrese sexo: (f/m)").toLowerCase();
		} while (sexo != 'f' && sexo !='m');

		do {
			estadoCivil = prompt("Ingrese estado civil: (soltero/casado/viudo)").toLowerCase();
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		temperatura = parseFloat(prompt("Ingrese temperatura corporal: "));

		if (flagMayorTemperatura == 0) {
			nombreMayorTemperatura = nombre;
			temperaturaMayor = temperatura;
			flagMayorTemperatura = 1;
		}
		else if (temperaturaMayor < temperatura) {
			temperaturaMayor = temperatura;
		}

		if(edad >= 18 && estadoCivil == "viudo"){
			mayorEdadViudo++;
		}

		if(sexo == 'm' && estadoCivil != "casado"){
			hombresNoCasados++;
		}

		if(edad > 60 && temperatura > 38){
			terceraEdadConFiebre++;
		}

		if(sexo == 'm' && estadoCivil == "soltero"){
			hombresSolteros++;
			sumaEdades += edad;
		}
		

		respuesta = prompt("Desea seguir ingresando datos? (s/n)").toLowerCase();
	} while (respuesta == 's');

	promedioEdadHombresSolteros = (sumaEdades / hombresSolteros).toFixed(2);

	alert(`La persona con mayor temperatura es ${nombreMayorTemperatura} con ${temperaturaMayor}`);
	alert(`Hay ${mayorEdadViudo} mayores de edad viudos.`);
	alert(`Hay ${hombresNoCasados} hombres solteros o viudos.`);
	alert(`${terceraEdadConFiebre} personas mayores de edad con fiebre.`);
	alert(`El promedio de edad en hombres solteros es: ${promedioEdadHombresSolteros}`);
}
