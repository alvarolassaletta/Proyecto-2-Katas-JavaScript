/**Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página */

/**Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters */


/**Estructura de lso objetos 
 * {
    "id": 0,
    "firstName": "Daenerys",
    "lastName": "Targaryen",
    "fullName": "Daenerys Targaryen",
    "title": "Mother of Dragons",
    "family": "House Targaryen",
    "image": "daenerys.jpg",
    "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
  },
*/



/**Obtener los personakes. Esta Api lo que devuelve es un array de objetos de 53 personajes  */
const fetchCharacters=  async ()=>{
    try{
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data =  await response.json();
        console.log(data);
        return data;

    }catch(error){
        console.log(error);
    }
};

//recuperamos el select y img 
const select =  document.querySelector('#character-list');
const img = document.querySelector('.character-image');


//obtenemos el array de caracteres y  por cada caracter creamos un option
const insertCharactersInSelect = async ()=>{

    try{
        const characters =  await  fetchCharacters();

        for(const character of characters){
            const option = document.createElement('option');
            option.value= character.fullName; 
            option.textContent=`${character.fullName}`;
            select.appendChild(option);
         }

    }catch(error){
        console.log(error);
    }
}
insertCharactersInSelect();


const inyectCharacterImage =  async ()=>{
    try{
        const characters =  await  fetchCharacters();
        //obtenemos el array de personajes 
        
        select.addEventListener('change',(event)=>{

            const selectedCharacterName= event.target.value;
            /*Recuerda: target es el select y value el valor. 
            En este caso el nombre del personaje*/
            
            const selectedCharacter = characters.find((character)=>{ return character.fullName===selectedCharacterName})
            //en selectedCharacter se guarda el objeto del personaje seleccionado

            //si find no encuentra, devuelve undefined
            if(selectedCharacter!== undefined){
                img.src=`${selectedCharacter.imageUrl}`;
                img.alt=selectedCharacter.fullName;
                img.title=selectedCharacter.fullName;
            }
           
        })

    }catch(error){
        console.log(error);
    }

}

inyectCharacterImage();
