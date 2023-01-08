// Mostrar colores y hacer seleccion

document.querySelector('.btn-selector').onclick = () =>{
  document.querySelector('.selector-color').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.color-buttons');

themeButtons.forEach(color =>{

  color.addEventListener('click', () =>{
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--primario', dataColor);
  });

});


// Formulario para envío pre-configurado

const $form = document.querySelector('#form')
const $botonMailto = document.querySelector('#envio-mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  console.log(form.get('name'))
  $botonMailto.setAttribute('href', `mailto:merli.addams@email.me?subject=${form.get('name')} [ ${form.get('email')} ]&body=${form.get('message')}`)
  $botonMailto.click()
}