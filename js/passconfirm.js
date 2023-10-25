const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const button = document.querySelector('button');
const help = document.querySelector('.password_help');

button.addEventListener('click', verify);

function verify() {
  if(password.value === confirmPassword.value && password.value !== '') {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  } 
  else {
    password.setAttribute('class', 'error');
    confirmPassword.setAttribute('class', 'error');
  }
  if(password.value !== confirmPassword.value){
    help.textContent = '* Passwords do not match';
  }
}

console.log(password.value)