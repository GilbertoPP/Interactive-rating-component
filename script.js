'strict mode';

const rating = document.querySelectorAll('.rating');
const submitButtom = document.getElementById('submit');
const backButtom = document.getElementById('back');
const mainCard = document.querySelector('.main-card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectedEl = document.querySelector('.selected');
let selectedRating = 0;

/* SELEcTING  RATING*/

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', function () {
    const selec = rating[i];
    if (!selec.classList.contains('actived')) {
      for (let i = 0; i < rating.length; i++) {
        const whoActive = document.querySelector(`.rating-${[i]}`);
        if (whoActive.classList.contains('actived')) {
          whoActive.classList.remove('actived');
        }
      }
      selec.classList.add('actived');
      selectedRating = selec.textContent;
    } else {
      selec.classList.remove('actived');
    }
    console.log(selectedRating);
  });
}

/* BUTTOM SUBMIT */

submit.addEventListener('click', function () {
  selectedEl.textContent = selectedRating;
  mainCard.classList.toggle('hidden');
  thankYouCard.classList.toggle('hidden');
});

backButtom.addEventListener('click', function () {
  mainCard.classList.toggle('hidden');
  thankYouCard.classList.toggle('hidden');
});
