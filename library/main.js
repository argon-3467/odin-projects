let menuBar = document.querySelector('.menu-bar');
let option = document.querySelector('.option');
menuBar.addEventListener('click', (e)=>{
  menuBar.classList.toggle('change');
  option.toggleAttribute('hidden');
});

menuBar.addEventListener('keydown', (e)=>{
  menuBar.classList.toggle('change');
  option.toggleAttribute('hidden');
});

