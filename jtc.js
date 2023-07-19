let counter = document.querySelector('.counter');
let carIn = document.querySelector('.carIn');
let carOut = document.querySelector('.carOut');
counter.innerHTML = prompt('How many spots are available', '0');
carIn.style.color = 'red';
carOut.style.color = 'blue';

function parkIn(){
  if(counter.innerHTML == 0){
     counter.innerHTML = 0;
  }else{
    counter.innerHTML = counter.innerHTML - 1;
  }
 
}

function parkOut(){
  counter.innerHTML = +counter.innerHTML + 1;
}




