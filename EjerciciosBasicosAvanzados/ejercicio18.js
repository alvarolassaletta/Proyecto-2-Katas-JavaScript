/*Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.* */



const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

/*creando un nuevo array */ 
let newDestinations=[];

for(let i=0;i< placesToTravel.length;i++){
    
    if(placesToTravel[i].id!==11 && placesToTravel[i].id!==40){
        newDestinations.push(placesToTravel[i]);
    } 
}

console.log( " El  nuevo array  '\n'  ")
console.log(newDestinations);




/** modificando el array original  */
const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];


for(let i =placesToTravel2.length-1;i>=0;i--){
    if(placesToTravel2[i].id===11 ||  placesToTravel2[i].id===40){
        placesToTravel2.splice(i,1);
        
    }
}

console.log( " El array original '\n'  ")
console.log(placesToTravel2);
