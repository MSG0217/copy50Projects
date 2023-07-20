const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerHTML;
    } else {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.querySelector('small').innerHTML;
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>감사합니다!</strong>
        <br>
        <strong>해주신 응답: ${selectedRating}</strong>
        <p>해주신 응답 참고하여 서비스를 개선하겠습니다.</p>
    `
})

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove('active');
  }
}