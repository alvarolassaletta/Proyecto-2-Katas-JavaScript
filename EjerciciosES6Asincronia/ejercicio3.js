//!EJERCICIOS CON MAP 

/**3.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().
 */

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

//Map usa la sintaxis de arros functions. se puede explicitar el return (con {} y return) 
const names= users.map(user=>{return user.name})
//[ 'Abel', 'Julia', 'Pedro', 'Amanda' ]

//o return implicito (cuando es una sola instruccion). No se usa ni return , ni {}
const names2= users.map(user=> user.name);








/**3.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'. */

//el array de arriba

//sin ternario
const namesGamma = users.map(user=>{

    let nameToAdd='';
    if(user.name[0]==='A'){
        nameToAdd='Anacleto';
    } else{
        nameToAdd=user.name;
    }
    return nameToAdd;
})

console.log(namesGamma);

//con ternario
const namesBeta= users.map(user=>{
    return userName = user.name[0]==='A' ? 'Anacleto':user.name;
      /**si la primera letra empieza por A es la condicion. 
       * Si  la condicion es true  => el user.name sera Anacleto 
       *  false => el user.name sera el que valor de la key name*/          
})
console.log(namesBeta);



/*3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true. */

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

//con ternario
const cityNames= cities.map(city=>{
    return city.name= city.isVisited ? `${city.name} (visitado)` :  city.name
}) 

console.log(cityNames);

const cityNamesBeta = cities.map(city=>{
    let cityToAdd ='';
    if(city.isVisited){
        cityToAdd= `${city.name} (visitado)`;
    } else{
        cityToAdd= city.name;
    }
    return cityToAdd;
})

