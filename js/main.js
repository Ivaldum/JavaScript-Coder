//Simulador Calculadora


let operacion = prompt("Que operacion desea realizar? \n1- Sumar. \n2 - Restar. \n3 - Multiplicar. \n4 - Exponencial. \n5 - Factorial. \nX - Cancelar");
while (operacion != "X" && operacion != "x"){
    //menu calculadora
    switch(operacion){
        case "1":
            sumar();
            break;
        case "2":
            restar();
            break;
        case "3":
            multiplicar();
            break;
        case "4":
            exponencial();
            break;
        case "5":
                factorial();
                break;
        default:
            alert("Opcion no valida");
            break;
    }
    operacion = prompt("Que operacion desea realizar? \n1- Sumar. \n2 - Restar. \n3 - Multiplicar. \n4 - Exponencial. \n5 - Factorial. \nX - Cancelar");
};

function sumar(){
    n1=prompt("ingrese primer valor");
    n2=prompt("ingrese segundo valor");
    return (alert("El resultado es: " + (parseInt(n1) + parseInt(n2))))
}

function restar(){
    n1=prompt("ingrese primer valor");
    n2=prompt("ingrese segundo valor");
    return (alert("El resultado es: " + (parseInt(n1) - parseInt(n2))))
}

function multiplicar(){
    n1=prompt("ingrese primer valor");
    n2=prompt("ingrese segundo valor");
    return (alert("El resultado es: " + (parseInt(n1) * parseInt(n2))))
}


function exponencial(){
    n=prompt("ingrese el numero");
    x=prompt("ingrese el exponente");
    return (alert("El resultado es: " + (parseInt(n) ** parseInt(x))))
}

function factorial(){
    total = 1;
    n = prompt("Ingrese un numero");

	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return (alert("El resultado es: " + total)); 
}


