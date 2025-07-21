/*Escribe una función que calcule el promedio de duración de una lista de películas.

Recibe un array de películas, cada una con su duración en minutos.

La función debe devolver el promedio de duración de todas las películas.*/ 


const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {

    if (!Array.isArray(movies)){
      console.log('El argumento introducido no es un array');
    }
    
    let totalDuration=0;

    for(let i=0;i<movies.length;i++){
        totalDuration+=movies[i].duration;
        
    return  Math.floor(totalDuration/movies.length);
}
}
let averageDuration=averageMovieDuration(movies);
console.log(averageDuration);



