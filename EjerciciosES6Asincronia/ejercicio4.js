//!Ejercicios con FILTER 

/**4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const above18= ages.filter(age=> age>18);
console.log(above18);





/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.*/

//mismo array que arriba

const evenAges=  ages.filter(age=> age%2===0);
console.log(evenAges);




/**4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const playLol = streamers.filter(streamer=> streamer.gameMorePlayed==='League of Legends');
console.log(playLol);
/**[
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' }
] */



/**4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación. */

//el array de streamers 

const namesContainingU=  streamers.filter(streamer=>{
     return  streamer.name.includes('u') || streamer.name.includes('U');
})
console.log(namesContainingU);




/**4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35. */


const playLegends = streamers.filter(streamer=>{ 
	 return streamer.gameMorePlayed.includes('Legends');
})

for (const  streamer of playLegends){ 
	if (streamer.age>35){
		streamer.gameMorePlayed= streamer.gameMorePlayed.toUpperCase();
	}
}
console.log(playLegends)
/**[
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS' }
] */


console.log(streamers);
/** ¿Porque el array original esta modificado?? 
 * 
 * [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
] */