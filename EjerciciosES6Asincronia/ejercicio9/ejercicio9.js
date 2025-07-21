/**Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste. 

Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.*/


//recuperamos la imagen 
const pokemonImg = document.querySelector('img');

//funcion para obtener de la Api el objeto con la informacion del  pokemon 
const fetchPokemon = async (pokemonId) =>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        console.log(data);
        return data;

    }catch(error){
        console.log(error);
    }
}

/*funcion para obtener el objeto y poner la imagen del pokemon
Elijo la imagen shiny.
 */
const inyectImage =  async ()=>{
    
    try{
        const randomId=Math.floor(Math.random()*151)+1;
        const pokemonObject = await fetchPokemon(randomId);
        pokemonImg.src=pokemonObject.sprites.front_shiny;
        pokemonImg.alt=pokemonObject.name;

    }catch(error){
        console.log(error)
    }

}

//funcion para  añadir el evento load de window 
const  loadPokemon =  async ()=>{
   
    try{
        window.addEventListener('load',(event)=>{
            inyectImage();
        })
    }catch(error){
        console.log(error);
    }
}
loadPokemon();
    



