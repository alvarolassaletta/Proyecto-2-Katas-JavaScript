
/*1.1  Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul');
countries.forEach((country)=>{
	const li = document.createElement('li');
	li.textContent=country;
	ul.appendChild(li);
})

document.body.appendChild(ul);




/*1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

const paragraphToRemove = document.querySelectorAll('.fn-remove-me');

paragraphToRemove.forEach((paragraph)=>{
	paragraph.remove();
})






/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

//recuperamos el div 
const divPrintHere= document.querySelector('div[data-function="printHere"]');

//creamos el ul
const ulBeta= document.createElement('ul');

//recorremos el array y por cada elemento creamos un li al que asignamos el texto de elemento
cars.forEach((car)=>{
	const li = document.createElement('li');
	li.textContent=car;
	ulBeta.appendChild(li);
})

//inyectamos el ul en el div
divPrintHere.appendChild(ulBeta);







/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.*/

const countryObjects = [

	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}

];

//creamos una section  con una clase 'gallery y la inyectamos en el body
const sectionGallery=document.createElement('section');
sectionGallery.classList.add('gallery')
document.body.appendChild(sectionGallery);

countryObjects.forEach((country)=>{
	
	//Por cada objeto en el array se hace lo siguiente:

	//creamos el div, el h4 y  la img 
	const div= document.createElement('div');
	const h4=document.createElement('h4');
	const img=document.createElement('img');

	//le damos una clase a cada div
	div.classList.add('section-item');

	//asignamos texto al h4
	h4.textContent=country['title'];

	//asignamos los atributos src, alt y title a img 
	img.src=country['imgUrl'];
	img.alt='imagen random';
	img.title='una imagen cualquiera';

	//inyectamos en el div tanto el h4 como la img 
	div.appendChild(h4);
	div.appendChild(img);

	//inyectamos el div en la section 
	sectionGallery.appendChild(div);

})



/**1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs. */

//creamos el button y le damos texto
const button =document.createElement('button');
button.textContent='Eliminar ultima imagen de la galeria';

//añadimos el addEventListener para que cuando se haga chick se elimine  el ultimo div
button.addEventListener('click',()=>{

	//recuperamos el ultimo div de la section 
		lastDiv=sectionGallery.lastElementChild;
		
		//lastDiv es truthy 
		if(lastDiv){
			lastDiv.remove();
		}else{ 
			alert('Has eliminado todas las imagenes');
		}
	

})

//inyectamos el button en el  body
document.body.appendChild(button);





/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */

/*los elementos hijos de la section 
const divImages= sectionGallery.children; //devuelve una html Collection 
console.log(divImages);*/

//recuperamos  todos los div de la section   con la clase section-item en un NodeList ;
const sectionDivs = document.querySelectorAll('.section-item');

sectionDivs.forEach((div)=>{

	/*por cada div creamos un button con un texto y una clase
	e inyectamos el button en el div*/

	const buttonDiv=document.createElement('button');
	buttonDiv.textContent='Eliminar imagen';
	buttonDiv.classList.add('button-div');
	div.appendChild(buttonDiv);

	buttonDiv.addEventListener('click',()=>{
		div.remove();
	})
	
})