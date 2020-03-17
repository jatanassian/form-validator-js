const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions
showError = (input, message) => {
  // Change the class of the div
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  // Change the text of the error message
  const small = formControl.querySelector('small');
  small.innerText = message;
}

showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!username.value) {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if(!email.value) {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }

  if(!password.value) {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if(!password2.value) {
    showError(password2, 'Password2 is required');
  } else {
    showSuccess(password2);
  }
});