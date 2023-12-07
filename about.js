'use strict';

{
  const open = document.getElementById('open');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');
  const close = document.getElementById('close');
  const movie = document.getElementById('movie');
  const anime1 = document.getElementById('card1');
  const anime2 = document.getElementById('card2');
  const anime3 = document.getElementById('card3');
  const anime4 = document.getElementById('card4');
  const anime5 = document.getElementById('card5');
  const anime6 = document.getElementById('card6');
  const anime7 = document.getElementById('card7');

  function move() {
    movie.classList.remove('anime');
    anime1.classList.remove('anime');
    anime2.classList.remove('anime');
    anime3.classList.remove('anime');
    anime4.classList.remove('anime');
    anime5.classList.remove('anime');
    anime6.classList.remove('anime');
    anime7.classList.remove('anime');
  };

  open.addEventListener('click',() => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click',() => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    move();
  });
  mask.addEventListener('click',() => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    move();
  });

  movie.addEventListener('click',() => {
    movie.classList.add('anime');
    anime1.classList.add('anime');
    anime2.classList.add('anime');
    anime3.classList.add('anime');
    anime4.classList.add('anime');
    anime5.classList.add('anime');
    anime6.classList.add('anime');
    anime7.classList.add('anime');
  });
}