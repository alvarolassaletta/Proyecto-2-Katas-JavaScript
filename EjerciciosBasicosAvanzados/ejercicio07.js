
/**Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne , numberTwo) {
    console.log(Math.max(numberOne, numberTwo));
}

greaterNumber(12,324235326);

//otra forma. 
function greaterNumber2(numberOne , numberTwo) {
    
    if (numberOne >numberTwo){
       return numberOne;
    } else if(numberTwo > numberOne){
        return numberTwo;
    } else{
        return `numeros iguales ${numberOne} === ${numberTwo}`
    }
    
}
console.log(greaterNumber2(1,12));
console.log(greaterNumber2(15,15));
console.log(greaterNumber2(12,1));
