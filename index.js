const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const charInput = document.querySelector('.chars-num_input');
const generateButton = document.querySelector('.generate');
const generatedPassword = document.querySelector('.generated-password');
const copyMessageBox = document.querySelector('.copied');

let passwordLength = 5;

copyMessageBox.innerHTML = '';

const chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-?/><,.;:{[]}';

plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
generateButton.addEventListener('click', generate);
generatedPassword.addEventListener('click', copy);
generatedPassword.addEventListener('focusout', () => {
  copyMessageBox.innerHTML = '';
});

function plus() {
  passwordLength++;
  charInput.value = passwordLength;
  if (passwordLength >= 16) {
    passwordLength = 16;
    charInput.value = 16;
  }
}

function minus() {
  passwordLength--;
  charInput.value = passwordLength;
  if (passwordLength <= 5) {
    passwordLength = 5;
    charInput.value = 5;
  }
}

function generate() {
  const password = [];
  for (let i = 0; i < charInput.value; i++) {
    password.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  generatedPassword.value = password.join('');
}

function copy() {
  if (this.value === '') {
    return;
  }
  navigator.clipboard.writeText(this.value);
  copyMessageBox.innerHTML = 'Password copied';
}
