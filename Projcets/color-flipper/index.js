
const targeBtn = document.getElementById('btn');

const back = document.getElementById('contenr');

let RemoveBtn = document.getElementsByClassName('RemveBTN');






function getRandomColor() {

   return "#" + Math.floor(Math.random() * 16777215).toString(16)
;}



targeBtn.addEventListener('click', function () {

   const ChangeBTN = getRandomColor();

   // console.log('colors',randomColor,back)

   back.style.background = ChangeBTN;



   console.log("Clickable Worked");
});

