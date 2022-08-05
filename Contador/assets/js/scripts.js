let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
var elemento;
elemento = document.getElementsByTagName('button');

function subtrair() {
  count--;
  CURRENT_NUMBER.innerHTML = count;
  cor(count);
}

function adicionar() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
  cor(count);
}

elemento[0].addEventListener("click", subtrair);

elemento[1].addEventListener("click", adicionar);

function cor(count) {
  if(count<=0) {
    CURRENT_NUMBER.style.color = 'red';
  }
  else {
    CURRENT_NUMBER.style.color = 'black';
  }
}
