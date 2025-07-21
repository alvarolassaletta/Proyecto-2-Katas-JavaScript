/** Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

Es decir, la media de volumen de todos los volumenes juntos.*/

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

let totalVolume=0;
let keyToCheck='favoritesSounds';
let totalLength=0;


for (let user of users){

    for(let key in user){

        if(key===keyToCheck){

            const favoriteSoundsKeys=Object.keys(user.favoritesSounds)
                    /**[ 'waves', 'rain', 'firecamp' ]
                        [ 'waves', 'shower', 'train' ]
                        [ 'shower', 'train', 'firecamp' ]
                        [ 'waves', 'wind', 'firecamp' ]*/
            totalLength+=favoriteSoundsKeys.length;

            for(let sound of favoriteSoundsKeys){

                  totalVolume+=user.favoritesSounds[sound].volume;
                  //hay que usar los corchetes porque sound es un un String en el array de key 
            }
        }
        
    }
}

console.log(totalVolume);
console.log(totalLength);
console.log(`La media de volumen  de los sonidos favoritos es: ${totalVolume/totalLength}`);
