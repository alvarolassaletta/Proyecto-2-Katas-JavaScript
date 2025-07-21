/*Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.

Averigua como hallar el año actual en tus cálculos.*/

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

/*calcular al año actual 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

const currentYear=new Date().getFullYear();  

guardamos en una variable en año actual, que usaremos obtener la edad del actor restando  el año de nacimiento 
*/ 


function calculateActorsAges(actors) {

    if(!Array.isArray(actors)){
        return 'El argumento introducido no es un array';
    }

    const currentYear=new Date().getFullYear();
    const actorsAge=[];
   
    for(let i=0;i<actors.length;i++){
        
          let actorAge=currentYear-actors[i].born;
          actorsAge.push({name:actors[i].name, age:actorAge})
                    //añadimos el objeto al array  con sus pares de key:value
    }
    return actorsAge;
        
}
const arrayBetaActorsAge= calculateActorsAges(actors);
console.log(arrayBetaActorsAge);

/**[
  { name: 'Leonardo DiCaprio', age: 51 },
  { name: 'Tom Hanks', age: 69 },
  { name: 'Meryl Streep', age: 76 },
  { name: 'Brad Pitt', age: 62 },
  { name: 'Johnny Depp', age: 62 },
  { name: 'Scarlett Johansson', age: 41 },
  { name: 'Jennifer Lawrence', age: 35 },
  { name: 'Denzel Washington', age: 71 },
  { name: 'Morgan Freeman', age: 88 },
  { name: 'Cate Blanchett', age: 56 }
] */

