/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.* */

/* tienes  que buscar mediante los poderes y si lo encuentra que te diga que si está o no lo está, es decir, buscarlo por su poder y no su nombre*/ 

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
   { name: 'Colossus', power: 'steel skin' },
];


function findMutantByPower(mutants, mutantPower) {
  
  if(!Array.isArray(mutants)){
    return 'Error. El argumento no es un array';
  }
  if( typeof mutantPower!=='string'){
    return 'Poder invalido';
  }

  const mutantsWithSearchedPower=[];
  let found =false;

  for(let mutant of mutants){
    if (mutant.power===mutantPower){
      mutantsWithSearchedPower.push(mutant);
      found=true;
    }
  }

  if(found && mutantsWithSearchedPower.length===1){
    return `Se encontro un mutante con el poder ${mutantPower}`;
  } else if(found && mutantsWithSearchedPower.length>1){
    return `Se encontraron ${mutantsWithSearchedPower.length} mutantes con el poder ${mutantPower}`;
  } else{
    return `No se encontraron mutantes con el poder ${mutantPower}`;
  }
    
}


console.log(findMutantByPower(mutants,'magnetism'));
console.log(findMutantByPower(mutants,'steel skin'));
console.log(findMutantByPower(mutants, 'fire'));
console.log(findMutantByPower(mutants, 5));
console.log(findMutantByPower('unstring', 5));


