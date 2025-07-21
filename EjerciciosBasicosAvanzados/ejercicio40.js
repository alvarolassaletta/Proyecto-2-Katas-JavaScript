/* PARTE 1.  Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.*/ 


function findArrayIndex(array, text) {
    let found = false, indexTargetted=0;

    if(!Array.isArray(array)){
        return `el parametro debe ser un array`;
    }
    if(typeof text!=='string'){
        return 'el segundo paramentro debe ser una cadena de texto';
    }

    /*recorro el array manualmente  para buscar el index del texto. Tb podria usar  indexOF()*/
    for (let i=0;i<array.length;i++){
        if(array[i]===text){
            indexTargetted=i;
            found=true;
        }
    }

    if(found){
        return indexTargetted;
    } 
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters,"Leia"));
console.log(findArrayIndex(mainCharacters,'Anakin'));
console.log(findArrayIndex(mainCharacters,'Count Dooku'));
console.log(findArrayIndex(mainCharacters,'Mace Windu'));
console.log(findArrayIndex(mainCharacters,5));



/* PARTE 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/ 

console.log('Function remove item');

function removeItem(array,text){
    let textIndex= findArrayIndex(array,text);
    let success=false;
   
    if(textIndex!==null && textIndex!==undefined){
        array.splice(textIndex,1)
        success=true;
    }

    if(success){
        return array;
    }
}

console.log(removeItem(mainCharacters,"Leia"));
console.log(removeItem(mainCharacters,'Anakin'));
console.log(removeItem(mainCharacters,'Count Dooku'));
console.log(removeItem(mainCharacters,'Mace Windu'));



