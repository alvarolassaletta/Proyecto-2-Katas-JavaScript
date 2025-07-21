/*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.*/ 

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
/*recorremos el array de objetos y comprobamos si la propiedad o key  isVegan del objeto es false.
Si lo es, sustituimos  el valor de la key name por un elemento del array fruits y fijamos isVegan como true
Igualemnte usamos un contador para ir avanzando en el array de frutas  */ 

let counter=0;
for( let  item of foodSchedule){
    
    if(!item.isVegan &&counter<fruits.length){
        item.name=fruits[counter]
        item.isVegan=true; 
        counter++;
    }
    
}

for( let  item of foodSchedule){
    console.log(item);
}