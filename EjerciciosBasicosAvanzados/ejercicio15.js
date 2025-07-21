/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript.*/ 

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

const includeString=(arrayItems)=>{
    
    for(let item of arrayItems){
      if(item.includes("Camiseta")){
          console.log(item);
      }
    }

}

includeString(products);
/*Camiseta de Metallica
Camiseta de Basket
AC/DC Camiseta*/
