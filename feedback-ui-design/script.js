const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = 'satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating') && e.taget.nextElementSibling) {
    removeActive();   
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  } else if(e.target.parentNode.classList.contains('rating') && e.target.previousSibling && e.target.previousSibling.nodeName === 'IMG') {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.innerHTML;
  }
})

console.log("🚀 ~ file: script.js:17 ~ ratingsContainer.addEventListener ~ selectedRating:", selectedRating)

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>감사합니다</strong>
    <br>
    <strong>해주신 응답: ${selectedRating}</strong>
    <p>해주신 응답 참고하여 서비스를 개선하겠습니다.</p>
  `;
})

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}