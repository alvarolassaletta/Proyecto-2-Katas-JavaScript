/** 
 * 
4.1 - Saca a "Tendo" por consola atacando su posición.
4.2 - Coloca en el último lugar de este array a "Cervasio".
4.3 - Cambia el primer elemento de este array por "Bambina".
4.4 - Dale la vuelta a este array.
4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
 Pista: puedes usar el método length con algo más para ello.

// */


const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1
console.log(`\n Mostrarmos al aldeano Tendo, en la 4ª posicion: ${aldeanos[3]}`);


//4.2
aldeanos.push("Cervasio");
console.log(`\n El ultmo aldeano sera: ${aldeanos[aldeanos.length-1]}`);

//4.3
aldeanos[0]="Bambina";
console.log(`\n Ahora la primera aldeana es ${aldeanos[0]}`);

//4.4 
console.log(`\n Los aldeanos aparecen en este orden: ${aldeanos}`);
aldeanos.reverse()
console.log(`Se ha cambiado el orden: ${aldeanos}`);

//4.5

//Cervasio,Nendo,Tendo,Vacarena,Narciso,Bambina
aldeanos.splice(4,1,"Canela");
console.log(`\n Usando splice cambiamos a Narciso por Canela: ${aldeanos}`);
//  Cervasio,Nendo,Tendo,Vacarena,Candela,Bambina


//4.6
console.log(`\n Ultimo aldeano:  ${aldeanos[aldeanos.length-1]}`);
