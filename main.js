'use strict';

{
  const about = document.getElementById('about');
  const work = document.getElementById('work');
  const pr = document.getElementById('pr');
  const skill = document.getElementById('skill');

  const top = document.getElementById('scroll');
 

  window.addEventListener('scroll',() => {
    let scrollY = window.scrollY;
    if(scrollY > 0){
      about.classList.add('show');
    }
    if(scrollY > 0 && window.innerWidth > 600){
      about.classList.add('show');
    }
    if(scrollY > 560){
      work.classList.add('show');
    }
    if(scrollY > 350 && window.innerWidth > 600){
      work.classList.add('show');
    }
    if(scrollY > 1050){
      pr.classList.add('show');
    }
    if(scrollY > 700 && window.innerWidth > 600){
      pr.classList.add('show');
    }
    if(scrollY > 1550){
      skill.classList.add('show');
    }
    if(scrollY > 1050 && window.innerWidth > 600){
      skill.classList.add('show');
    }

    if(scrollY > 1000) {
      top.classList.add('show');
    }
    if(scrollY <= 1000) {
      top.classList.remove('show');
    }
  });
}