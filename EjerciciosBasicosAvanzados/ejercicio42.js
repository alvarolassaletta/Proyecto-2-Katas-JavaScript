/**Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1,index2){
    
    /*Comprobaciones referidas a que  tipo de dato del paramentro es el deseado*/
    if(typeof(index1)!=='number' ||typeof(index2)!=='number'){
        return `los valores introducidos deben ser numeros`;
    }
    if((typeof(array))!=='object'){
        return `El parametro proporcionado no es un array`;
    }
    //Comprobaciones de validez de los indices 
    if(index1>= array.length ||index2>=array.length){
        return `los indices son mayores al numero de elementos existentes en el array`;
    }
    if(index1 <0 || index2<0){
        return `Los indices  no pueden ser valores negativos`;
    }

    /*Para hacer el cambio es necesario guardar el valor del index1 en una variable para luego poder asignarlo al index2 */
    index1Value=array[index1];
    array[index1]=array[index2];
    array[index2]=index1Value;

    return array;
}

console.log(swap(fantasticFour,0,3));
console.log(swap(fantasticFour, 1,2));
console.log(swap(fantasticFour,-3,15));
console.log(swap('unString',0,1));
console.log(swap(fantasticFour,'hola','otroString'));

