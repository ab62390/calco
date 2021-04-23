const resultScreen = document
  .querySelector('#result-screen');
const clearButton = document
  .querySelector('#clear-button');
const backspaceButton = document
  .querySelector('#backspace-button');
const digits = document
  .querySelectorAll('.digit');
const operResult = document.querySelector('#oper-result');

for(const d of digits) {
  d.addEventListener('click', printDigit);
};

clearButton.addEventListener('click', clearScreen);

backspaceButton.addEventListener('click', removeLastDigit);

operResult.addEventListener('click', showResult);

function printDigit() {
  const str = this.innerHTML;
  const digit = str.replace(/\s/g, '');
  resultScreen.innerHTML += digit;
}

function clearScreen() {
  resultScreen.innerHTML = '';
}

function removeLastDigit() {
  const str = resultScreen.innerHTML;
  const newStr = str.substring(0, str.length - 1);
  resultScreen.innerHTML = newStr;
}

function showResult() {
  const str = resultScreen.innerHTML;
  const str_clean = str
    .replace(/-$|\+$|×$|÷$/, '')
    .replace('×', '*')
    .replace('÷', '/');
  const res = eval(str_clean);
  resultScreen.innerHTML = res;
}