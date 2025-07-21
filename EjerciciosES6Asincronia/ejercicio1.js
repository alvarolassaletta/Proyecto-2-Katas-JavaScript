/*.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto.
*/

const game = {
    title: 'The Last of Us 2',
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}

const {title,gender,year}=game;
console.log(`Videojuego: ${title}; genero: ${gender};  Año lanzamiento:  ${year}`);

/*.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2,fruit3]=fruits;
console.log(fruit1, fruit2, fruit3);


/*1.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const {name,race}= animalFunction();
console.log(`nombre: ${name}`);
console.log(`Raza: ${race}`);



/* 1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const {name:carName,itv}=car;
//le cambio el nombre a name a carName 

console.log(carName);
console.log(itv);

const [year1,year2,year3]= itv;
console.log(`Los años de la ITV son : ${year1}, ${year2} y ${year3}`);
