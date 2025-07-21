/** Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let keyToCheck='favoritesSounds';
const soundsObject ={};
    //declaramos e inicializamos un objeto en el que vamos guardar cada sonido como la key

for(let user of users){

    for(key in user){
        if (key===keyToCheck){
            const favoriteSoundsKeys=Object.keys(user.favoritesSounds)
            
            for(let sound of favoriteSoundsKeys){
                
              if(!soundsObject[sound]){  // si la key  no esta enel objeto soundsObject, la metemos con valor de 0
                    soundsObject[sound]=0;
              }
            }
        }
    }

}
console.log(soundsObject)
//{ waves: 0, rain: 0, firecamp: 0, shower: 0, train: 0, wind: 0 }

for(let user of users){
    for(sound in user.favoritesSounds){
        if(sound in soundsObject){
            soundsObject[sound]++;
        }

    }
}

console.log(soundsObject);

for(let sound in soundsObject){
    console.log(`El sonido ${sound} aparece ${soundsObject[sound]} vez o veces`);
}
//{ waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1 }