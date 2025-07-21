/**Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado. */

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {

  if(typeof country!=='string'){
    return 'Pais inválido';
  }

  if(country in capitals){
      return capitals[country];
  } else{
      return `El pais ${country} no esta en la lista`;
  }
}

console.log(getCapital('Germany'));
console.log(getCapital('Chile'));
let countryToCheck='Spain';
console.log(getCapital(countryToCheck));
console.log(getCapital(234));
console.log(getCapital('Iran'));
console.log(getCapital('Bulgary'));


/*Country es un parametro y no una key o propiedad del objecto capitals. No puedo usar  la notacion de acceso capitals.country porque solo funciona si la key es  una key  del objeto. Country no es key en capitals. 
Hay que usar los [} para acceder a los valores las keys de capitals 
capitals[country]*/ 


