/**Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:*/ 

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

const repeatCounter= (arrayPalabras)=>{
  
  if(!Array.isArray(arrayPalabras)){
    return 'Debes  intorducir un array'
  }

  const objeto={};

  for ( let item of arrayPalabras) {
    if(objeto[item]){
        /*comprobamos si  la  key existe en el objeto y si existe , se mete en el if y el valor de la key se le suma 1. */
        objeto[item]++;
    } else {
      objeto[item]=1;
      //si no exsite le key en el objeto, se crea y se le da valor 
    }
  }

  return objeto; 
}



console.log(repeatCounter(words));
   






    
    

