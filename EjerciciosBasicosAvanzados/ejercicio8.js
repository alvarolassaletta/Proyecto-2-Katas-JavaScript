

/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tengan la misma longitud deberá devolver el primero.
*/ 



const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
  ];

  const findLongestString =(arrayString) => {
    if(!Array.isArray(arrayString)){
      return "Error: El argumento debe ser un array"
    }
    
    let longestString= 0;
    let longestStringIndex =0;

    for(let i=0; i<arrayString.length; i++){
        if(arrayString[i].length >longestString){
            longestString =arrayString[i].length;
            longestStringIndex = i;
        }
        //en el supuesto de que dos tenga la misma longitud devuelve el primero porque se usa >
    
    }
    return arrayString[longestStringIndex];

  }

 console.log(`El string mas largo en la lista es ${findLongestString(avengers)}`);
 //El string mas largo en la lista es Captain A.

