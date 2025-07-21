/*Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

function rollDice(numFaces){
    if(typeof(numFaces)!== 'number'){
        return 'El numero de caras del dado debe ser un numero entero';
    }
    let diceResult = Math.floor(Math.random()*numFaces)+1;
    return diceResult;
}

console.log(rollDice(4));
console.log(rollDice(6));
console.log(rollDice(8));
console.log(rollDice(12));
console.log(rollDice(20));
console.log(rollDice(100));
console.log(rollDice('unString'));

