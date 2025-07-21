/*Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola.*/ 

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

//1. guardamos en un array  los generos unicos
const uniqueGenre=[]
for (let track of tracks){
    if(!uniqueGenre.includes(track.genre)){
        uniqueGenre.push(track.genre)
    }
}
console.log(uniqueGenre);
    //[ 'Metal', 'Rock', 'Pop', 'Country', 'Grunge' ]

/*creamos nuesto objeto vacio y usamos un bucle for of para recorrer el array con los generos y  para crear las keys y los valores. la key sera el genero y el valor un array  */ 

const trackObject={}
for(let genre of uniqueGenre){
    trackObject[genre]=[];
}
console.log(trackObject);
    //{ Metal: [], Rock: [], Pop: [], Country: [], Grunge: [] }


for (let track of tracks){
         //si existe una key con el genero en songsByGenre, añade la cancion al array ( que es el valor de la key)  
    if(songsByGenre[track.genre]){
        songsByGenre[track.genre].push(track.title);}

}

console.log(trackObject);


