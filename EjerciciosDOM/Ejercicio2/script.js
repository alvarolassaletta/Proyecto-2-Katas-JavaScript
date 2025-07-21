/**2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here */




//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv= document.createElement('div');
emptyDiv.classList.add('emptyDiv');
emptyDiv.id='emptyDiv'
document.body.appendChild(emptyDiv);

//2.2Inserta dinamicamente en un html un div que contenga una p con javascript.

const divWithParagraph = document.createElement('div');
divWithParagraph.classList.add('divWithParagraph');
divWithParagraph.id='div-With-paragraph';

const paragraph = document.createElement('p');
paragraph.textContent='Parrafo dentro de un div'; 

divWithParagraph.appendChild(paragraph);
document.body.appendChild(divWithParagraph);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

const  divWithSixP = document.createElement('div');
divWithSixP.classList.add('divWithSixP');
const  numberOfP=6;

for(let i=0; i<numberOfP;i++){
    const p= document.createElement('p');
    p.classList.add('sixP');
    p.textContent=`parrafo numero ${i+1}`;
    divWithSixP.appendChild(p);
}

document.body.appendChild(divWithSixP);


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dynamicP= document.createElement('p');
dynamicP.textContent='¡Soy dinámico!';
document.body.appendChild(dynamicP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here');
h2.textContent ='Wubba Lubba dub dub';


/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul= document.createElement('ul');
apps.forEach((app)=>{
    const li = document.createElement('li');
    li.textContent=app;
    ul.appendChild(li);
})
document.body.appendChild(ul);




/**2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const paragraphsRemove = document.querySelectorAll('.fn-remove-me');
paragraphsRemove.forEach((paragraph)=>{
    paragraph.remove();
})



/**2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

/**Creo el p , le doy contenido. Recuero el primer div y inserto el p despues del primer div */
const pInTheMiddle= document.createElement('p');
pInTheMiddle.textContent='¡Voy en medio!';
const divBeforeMiddle = document.querySelector('div');
divBeforeMiddle.after(pInTheMiddle);


/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here */

    /*recupero los div con esa clase en un Array de nodos. Recorro el array 
    y por cada div en el array creo un p con un texto que  inyecto en el div */ 
    
const  divsInsert = document.querySelectorAll('.fn-insert-here');
divsInsert.forEach((div)=>{
    const paragraph= document.createElement('p');
    paragraph.textContent='¡Voy dentro!';
    div.appendChild(paragraph);
})
