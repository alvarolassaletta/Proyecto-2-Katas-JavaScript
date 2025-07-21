

/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click */

const btn=document.createElement('button');
btn.classList.add('btnToClick');
btn.textContent='Haz click aquí';
document.body.appendChild(btn);
btn.addEventListener('click',(event)=>{
    console.log(event);
})


/**1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. 
 * Focus es cuando se pone el foco en el input
*/
const focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus',(event)=>{
    console.log(event.target.value);
    /*focusInput.value no es suficiente para que salga por consola 
      el valor del input. */
})


/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const valueInput = document.querySelector('.value');
valueInput.addEventListener('input',(event)=>{
    console.log(event.target.value);
})

