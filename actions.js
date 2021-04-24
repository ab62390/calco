digit0.addEventListener('click', () => {
  addToScreen('0')
});
digit1.addEventListener('click', () => {
  addToScreen('1')
});
digit2.addEventListener('click', () => {
  addToScreen('2')
});
digit3.addEventListener('click', () => {
  addToScreen('3')
});
digit4.addEventListener('click', () => {
  addToScreen('4')
});
digit5.addEventListener('click', () => {
  addToScreen('5')
});
digit6.addEventListener('click', () => {
  addToScreen('6')
});
digit7.addEventListener('click', () => {
  addToScreen('7')
});
digit8.addEventListener('click', () => {
  addToScreen('8')
});
digit9.addEventListener('click', () => {
  addToScreen('9')
});

backspaceButton.addEventListener('click', () => {
  const str = screen.innerHTML;
  const newStr = str.substring(0, str.length - 1);
  screen.innerHTML = newStr;
});

clearButton.addEventListener('click', ()=>{
  screen.innerHTML = '';
});

addButton.addEventListener('click', ()=> {
  if (isScreenEndWithDigit() && !isScreenEmpty()) addToScreen('+');
});

subButton.addEventListener('click', () => {
  if (isScreenEndWithDigit()) addToScreen('-');
});

divButton.addEventListener('click', () => {
  if (isScreenEndWithDigit() && !isScreenEmpty()) addToScreen('÷');
});

multButton.addEventListener('click', () => {
  if (isScreenEndWithDigit() && !isScreenEmpty()) addToScreen('×');
});

dotButton.addEventListener('click', () => {
   if (!isScreenHasRemainingDot()) {
     addToScreen('.');
   }
});

equalButton.addEventListener('click', calculate);

/* FUNCTIONS */
function addToScreen(t) {
  screen.innerHTML += t;
  screen.scrollLeft += 50;
}

function isScreenEmpty() {
  if (screen.innerHTML == '') {
    return true;
  } else {
    return false;
  }
}

function isScreenEndWithDigit() {
  const str = screen.innerHTML;
  const lastChar = str.substring(str.length - 1);
  if (['+', '-', '×', '÷', '.'].includes(lastChar)) {
    return false;
  } else {
    return true;
  }
}

function isScreenHasRemainingDot() {
  const str = screen.innerHTML;
  if (/\.\d+$|\.$/.test(str)) {
    return true;
  } else {
    return false;
  }
}

function calculate() {
  const str = screen.innerHTML;
  const str_clean = str
    .replace(/-$|\+$|×$|÷$|-\.$|\+\.$|×\.$|÷\.$/, '')
    .replace('×', '*')
    .replace('÷', '/');
  const res = eval(str_clean);
  screen.innerHTML = res;
}
