/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.*/ 

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(arrayNames,valueCheck) {

    if(!Array.isArray(arrayNames)){
        return 'El argumento debe ser un array';
    }
    if (typeof valueCheck !== 'string') {
        return `No has proporcionado un nombre `;
    }

    let index=0;
    let found=false; 

    for(let i=0;i<arrayNames.length;i++){
        if(arrayNames[i]===valueCheck){
            index =i;
            return  {found:true,index:i}; 
        }
    }
    return found; 

}

let nombre = nameFinder(names,'Tony');
//la funion debuelve un objeto si el nombre se ha encontrado 

if(nombre.found){
    console.log(`El nombre ${names[nombre.index]} ha sido encontrado y esta en la posicion ${nombre.index} del array`);
} else {
    console.log('El nombre no ha sido encontrado');
}
