/**1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'. */

//1.1
const finBucle=9;

for (let i= 0; i<=finBucle;i++){
    console.log(i)
}

//1.2
console.log("\n");

for(let i=0; i<=finBucle;i++){
    if(i %2===0){
        console.log(i);
    }
}
console.log("\n");

for (let i=0;i<=finBucle;i++){
    if(i !==finBucle){
        console.log('Intentando dormir 🐑');
    } else{
        console.log('Dormido!');
    } 
}
