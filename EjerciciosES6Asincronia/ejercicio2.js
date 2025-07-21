/*2.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy=[...pointsList];
        //[ 32, 54, 21, 64, 75, 43 ]

/**2.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy={...toy};

 
/**2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.*/

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3= [54,87,99,65,32]; 

const pointsListCombined = [...pointsList2,...pointsList3];
console.log(pointsListCombined)

/*2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators. */

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toysCombined={...toy2,...toyUpdate};
console.log(toysCombined);

/**2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const part1 =colors.slice(0,2); //de rojo a azul
const part2 = colors.slice(3) //de verde al final 
const  colorsNoYellow = [...part1,...part2];

console.log(colorsNoYellow); //[ 'rojo', 'azul', 'verde', 'naranja' ]

