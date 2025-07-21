/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.*/ 

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumNumbers=(arrayNumbers) =>{
    let total=0;
    for( let num of arrayNumbers){
        total+=num;
    }
    return total;
}
console.log(`La suma total de los numeros de la lista es: ${sumNumbers(numbers)}`);
