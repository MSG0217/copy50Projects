const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="../expanding-cards/image/Ryujin.jpg" alt="ryujin of itzy">';
  title.innerHTML = 'Ryujin';
  excerpt.innerHTML = 'Itzy의 류진';
  profile_img.innerHTML = '<img src="../expanding-cards/image/Ryujin.jpg" alt="ryujin of itzy">';
  name.innerHTML = 'Ryujin';
  date.innerHTML = 'Jul 17, 2023';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
  
}