
let num1 = 10;
let num2 = 12;
let num3 = 9;
let num4 = 17;
let suma = (num1+num2);
let resta =(num4-num3);
let resultadoFinal = (suma*resta);
document.write("El resultado final es: " + resultadoFinal);


// Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres hay en un grupo de estudiantes. Elaborar un programa que permita ingresar la cantidad de varones y mujeres y muestre el porcentaje de estos para su grupo de estudiantes.
/*
let hombres = parseInt(prompt("Ingresar la cantidad de hombres", ));
let mujeres = parseInt(prompt("Ingresar la cantidad de mujeres", ));

let total = (hombres+mujeres);

let porcentaje1 = ((mujeres/total)*100);
let porcentaje2 = ((hombres/total)*100);
document.write("El porcentaje de varones en el aula es: " + porcentaje1 + "%");
document.write(" El porcentaje de mujeres en el aula es: " + porcentaje2 + "%");


//La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la reparación de las pistas en las avenidas principales. Desarrollar un pseudocódigo que permita ingresar un monto de inversión en soles y lo reparta en la refacción de cinco avenidas de la siguiente manera: 

a. Avenida La Mar - 35% del monto 
b. Avenida Abancay - 25% del monto 
c. Avenida 28 de Julio - 10% del monto 
d. Avenida Aviación - 15% del monto 
e. Avenida Tacna - restante del monto (15%)

/*
let montototal = parseFloat(prompt("Ingresar monto de inversión", ));
let a = (montototal*0.35);
let b = (montototal*0.25);
let c = (montototal*0.10);
let d = (montototal*0.15);
let e = (montototal*0.15);

document.write("El monto de inversion para la Av La mar es: "+ a);
document.write(" El monto de inversion para la Av Abancay es: "+ b);
document.write(" El monto de inversion para la Av 28 de Julio es: "+ c);
document.write(" El monto de inversion para la Av Aviación es: "+ d);
document.write(" El monto de inversion para la Av Tacna es: "+ e);


//Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perú, para ello, se requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los tres tipos detallados en el siguiente tarifario:

let general = parseInt(prompt("Ingresar entradas generales: ")) * 150;
let mayores = parseInt(prompt("Ingresar entradas de mayores de 65: ")) * 50;
let menores = parseInt(prompt("Ingresar entradas de menores: ")) * 80;
let suma = (general+mayores+menores);
document.write("Cantidad de entradas vendidas es : " + "S/." + suma);

*/