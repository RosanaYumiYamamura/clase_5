/* • Escribir un algoritmo que nos pida una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa */


import * as rls from "readline-sync"

const pass : string = "eureka";
let clave : string = rls.question("Ingrese la clave: ");
let intentos : number = 0;

intentos = intentos + 1;

while(clave !== pass && intentos < 3){
    console.log("**La clave ingresada es invalida.** Llevas", intentos, "intento/s.");
    clave = rls.question("Ingrese nuevamente una clave: ");
    intentos = intentos + 1;
} if(clave == pass){
    console.log("*** Saliste del programa ***");
}else{
    console.log("Llegaste a los 3 intentos, intenta mas tarde");
}
