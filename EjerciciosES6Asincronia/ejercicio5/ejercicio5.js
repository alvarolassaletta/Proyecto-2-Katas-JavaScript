//!FILTER Y DOM 
/**Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const searchedValueInStreamersName = ()=>{

    const input = document.querySelector('input');

    input.addEventListener('input',(event)=>{
        //input se dispara cuando se escribe y cuando se borra

        const introducedValue= event.target.value;

        const streamersContainingIntroducedValue=  streamers.filter(streamer =>{
        return  streamer.name.toLowerCase().includes(introducedValue.toLowerCase());
        /*nombre del streamer y valor introducido  en minusculas paa evitar disparidades */ 
        })

        for(const item of streamersContainingIntroducedValue){
            console.log(`${item.name} contiene  ${introducedValue}`);
        }
    });
}

searchedValueInStreamersName();
