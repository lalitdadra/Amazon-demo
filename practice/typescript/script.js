// Vanilla JS with validation for login/registration (TS syntax removed)
const toggleBtns = document.querySelectorAll('.toggle-btn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if (btn.dataset.target === 'login') {
      registerSection.classList.add('hidden');
      loginSection.classList.remove('hidden');
    } else {
      loginSection.classList.add('hidden');
      registerSection.classList.remove('hidden');
    }
  });
});

// Utility validation functions
function validateEmail(email) {
  
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function showError(input, message) {
  const formGroup = input.parentElement;
  let error = formGroup.querySelector('.error');
  if (!error) {
    error = document.createElement('div');
    error.className = 'error';
    formGroup.appendChild(error);
  }
  error.textContent = message;
  input.classList.add('error-border');
}

function clearError(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error');
  if (error) error.remove();
  input.classList.remove('error-border');
}

// Login validation
function validateLogin(formData) {
  let isValid = true;
  
  if (!formData.email) {
    showError(loginForm.email, 'Email is required');
    isValid = false;
  } else if (!validateEmail(formData.email)) {
    showError(loginForm.email, 'Please enter a valid email');
    isValid = false;
  } else {
    clearError(loginForm.email);
  }
  
  if (!formData.password) {
    showError(loginForm.password, 'Password is required');
    isValid = false;
  } else if (!validatePassword(formData.password)) {
    showError(loginForm.password, 'Password must be at least 8 characters');
    isValid = false;
  } else {
    clearError(loginForm.password);
  }
  
  return isValid;
}

// Register validation
function validateRegister(formData) {
  let isValid = validateLogin(formData); 
  
  if (!formData.name) {
    showError(registerForm.querySelector('[name="name"]'), 'Name is required');
    isValid = false;
  } else {
    clearError(registerForm.querySelector('[name="name"]'));
  }
  
  if (!formData.confirmPassword || formData.confirmPassword !== formData.password) {
    showError(registerForm.confirmPassword, 'Passwords do not match');
    isValid = false;
  } else {
    clearError(registerForm.confirmPassword);
  }
  
  return isValid;
}

// Event listeners
[loginForm, registerForm].forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      email: form.email.value,
      password: form.password.value
    };
    
    if (form === registerForm) {
      formData.name = form.name ? form.name.value : '';
      formData.confirmPassword = form.confirmPassword.value;
    }
    
    let isValid;
    if (form === loginForm) {
      isValid = validateLogin(formData);
      if (isValid) {
        alert('Login successful!');
      }
    } else {
      isValid = validateRegister(formData);
      if (isValid) {
        alert('Registration successful!');
      }
    }
  });
});

// Real-time validation
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('blur', () => {
    const field = input.name;
    if (field === '') {
      if (input.value && !validateEmail(input.value)) {
        showError(input, 'Invalid email format');
      }
    } else if (field === 'password') {
      if (input.value && !validatePassword(input.value)) {
        showError(input, 'Password too short');
      }
    }
  });
  
  input.addEventListener('input', () => clearError(input));
});
