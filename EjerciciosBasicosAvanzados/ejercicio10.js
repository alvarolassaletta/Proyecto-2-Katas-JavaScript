/*Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.*/ 

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average =(arrayNumbers)=>{
    let total=0;
    // counter=0; puedes usar un counter o  length saber el numero de elementos

    for(let i=0; i < arrayNumbers.length;i++ ){
        total+= arrayNumbers[i];
        ;
    }
    return total /arrayNumbers.length;
}
console.log(`La media de los numeros incluidos en el array es: ${average(numbers)}`)

