/*Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.*/ 

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestDebut=cartoons[0].debut, oldestCartoon='';

for(let item of cartoons){
  if (item.debut < oldestDebut){
    oldestDebut=item.debut;
    oldestCartoon=item.name;
  }

}
console.log(`El dibujo animado mas antiguo es  ${oldestCartoon} con fecha de debut en ${oldestDebut}`);



