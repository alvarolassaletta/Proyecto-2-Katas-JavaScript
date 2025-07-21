

/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
 */
const button =document.querySelector('.showme');
console.log(button);

/*1.2  Usa querySelector para mostrar por consola el h1 con el id #pillado*/
const h1 =document.querySelector('#pillado')
console.log(h1);

// 1.3 Usa querySelector para mostrar por consola todos los p

const paragraphs=document.querySelectorAll('p');
console.log(paragraphs);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const h4Pokemon= document.querySelectorAll('.pokemon');
console.log(h4Pokemon);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".*/ 

const textMeElements= document.querySelectorAll('span[data-function="testMe"]')
console.log(textMeElements);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe". */
const thirdTextMeElement=textMeElements[2];
console.log(thirdTextMeElement);

