/** 
 *
 * Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
*/

const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
  ];

const averageWord= (mixedArray)=>{
    let totalNum =0, totalString=0,counterNum=0,counterString=0;
    
    for(let i=0; i <mixedArray.length; i++){
    
        if(typeof(mixedArray[i])==='number'){
            totalNum += mixedArray[i];
            counterNum++;
        } else {
            totalString+=mixedArray[i].length;
            counterString++;
        }
    }
    return (totalNum+totalString)/ (counterNum+counterString);

}

console.log(`La media es: ${averageWord(mixedElements)} `);