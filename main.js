'use strict';
{
  const hamburger = document.getElementById('hamburger');
  const openMenu = document.getElementById('openmenu');
  const mask = document.getElementById('mask');
  const menu = document.querySelector('#hamburger span');
  const menuLists = document.querySelectorAll('#openmenu ul li a');

  hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('show');
    openMenu.classList.toggle('show');
    mask.classList.toggle('show');
    menu.classList.toggle('show');
  });
  mask.addEventListener('click',() => {
    hamburger.classList.remove('show');
    openMenu.classList.remove('show');
    mask.classList.remove('show');
    menu.classList.remove('show');
  });
  menuLists.forEach(menuList => {
    menuList.addEventListener('click',() =>{
      hamburger.classList.remove('show');
      openMenu.classList.remove('show');
      mask.classList.remove('show');
      menu.classList.remove('show');
    });
  });
  
}