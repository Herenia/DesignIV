

var click = document.querySelectorAll('div button');
var menu = document.querySelector('#st-container');
var pusher = document.querySelector('.st-pusher');
// to store the corresponding effect
var effect;

// adding a click event to all the buttons
for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', addClass)

pusher.addEventListener('click', closeMenu())}




function addClass(e) {
  // to get the correct effect
  effect = e.target.getAttribute('data-effect');
  // adding the effects
  menu.classList.toggle(effect);
  menu.classList.toggle('st-menu-open');
  
  // console.log(e.target.getAttribute('data-effect'));
}

function closeMenu(e) {
  // if the click target has this class then we close the menu by removing all the classes
  if (e.target.classList.contains('st-pusher')) {
    menu.classList.toggle(effect);
    menu.classList.toggle('st-menu-open');
    // console.log(el.target);
  } 
}


//-----------------------CARROUSELL-------------------------------------//




// EJERCICIOS

function mostrar() {
  div = document.getElementById('flotante');
  div.style.display = '';
}

function cerrar() {
  div = document.getElementById('flotante');
  div.style.display = 'none';
}