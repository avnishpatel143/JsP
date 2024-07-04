document.getElementById('conetnt');

function print (){
    conetnt.style.background = 'green';
  console.log('Clicked');
};

conetnt.addEventListener('click', print);



conetnt.removeEventListener('click',print);
// conetnt.style.background = 'red'