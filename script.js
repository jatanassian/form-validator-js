const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  // Change the class of the div
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  // Change the text of the error message
  const small = formControl.querySelector('small');
  small.innerText = message;
}

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check if email is valid
validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Matches an email adress
  return re.test(String(email).toLowerCase()); // Run a test method to see if it's matching, returns true/false
}


// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!username.value) {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (!email.value) {
    showError(email, 'Email is required');
  } else if (!validateEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (!password.value) {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (!password2.value) {
    showError(password2, 'Password2 is required');
  } else {
    showSuccess(password2);
  }
});