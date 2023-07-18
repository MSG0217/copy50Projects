const nav = document.querySelector('.nav');
window.addEventListener('scroll', changeNavDesign);

function changeNavDesign() {
  if(window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}