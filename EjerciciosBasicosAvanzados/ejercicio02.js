/*1. Luke Skywalker cumple años:
Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.*/ 
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad= 25.
console.log(jedi.edad)


/*2. Presentación al estilo Leia Organa:

Crea tres variables con la siguiente información:
nombre: "Leia"

apellido: "Organa"

edad: 20

Muestra un mensaje por consola que siga la siguiente estructura:
"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."

Utiliza la concatenación para ello.*/ 
let nombre= "Leia"
let apellido= "Organa"
let edad=20

let objetoLeia = {
    nombre:nombre,
    apellido: apellido,
    edad:edad
}
console.log(`Soy ${objetoLeia.nombre} ${objetoLeia.apellido}, tengo ${objetoLeia.edad} años y soy una princesa ded Alderaan`)


/*3. Calculando el coste total de sables de luz:

Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
Imprime el resultado por consola utilizando console.log.*/

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const totalPrecio= sable1.precio + sable2.precio;
console.log(`El precio total de los sables de luz es: ${totalPrecio}`)

//otra forma de hacerlo

arraySables= []
arraySables.push(sable1)
arraySables.push(sable2)

let total=0
for(let i=0;i<arraySables.length;i++){
    total+=arraySables[i].precio
}
console.log(`El precio total de los sables de luz es: ${total}`)



/*4. Actualizando el precio final de las naves:

Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).*/ 

console.log("")
const precioBaseGlobal =25000;
const nave1 = {
    nombre: "Ala-X",
     precioBase: 50000, 
     precioFinal: 60000
};

const nave2 = {
    nombre: "Halcón Milenario", 
    precioBase: 70000, 
    precioFinal: 80000
};

/*nave1.precioFinal = nave1.precioBase +precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log(nave1.precioFinal); //75000
console.log(nave2.precioFinal); //95000
*/ 

//otra forma de hacerlo
let updateFinalPrice = (basePrice, globalPrice) =>{
    let finalPrice =basePrice +globalPrice;
    return finalPrice;
}

nave1.precioFinal=updateFinalPrice(nave1.precioBase,precioBaseGlobal,);
console.log(`El precio final de la nave 1 es ${nave1.precioFinal}`);
nave2.precioFinal=updateFinalPrice(nave2.precioBase, precioBaseGlobal);
console.log(`El precio final de la nave 2 es ${nave2.precioFinal}`);

