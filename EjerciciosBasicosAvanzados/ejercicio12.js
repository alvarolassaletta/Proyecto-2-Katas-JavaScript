/** 
 * 
 * Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.
*/


const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const removeDuplicate= (anArray)=>{
    const noDuplicates=[];
    
    for(let i=0;i<anArray.length-1;i++){
        if(!noDuplicates.includes(anArray[i])){
            noDuplicates.push(anArray[i]);
        }
    }
    return noDuplicates;
}

console.log(removeDuplicate(duplicates));
/**[
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'chicken',
  'onion rings'
] */
console.log(duplicates);
//el array original 


/** 
 * Si queremos que se modifique el array original  y se eliminen los elementos repetidos
 * se puede recorrer  hacia atras para que la posicion no cambie 
 * 
 * const removeDuplicate= (anArray)=>{
    const noDuplicates=[];
    
    for(let i=anArray.length-1;i>=0;i--){
        if(!noDuplicates.includes(anArray[i])){
            noDuplicates.push(anArray[i]);
        }else{
            anArray.splice(i,1);
        }
    }
    return noDuplicates;
}
 */

