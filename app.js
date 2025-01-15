// DOM Elements
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const logoutLink = document.getElementById('logoutLink');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');

// Show Login Form
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.style.display = 'block';
  registerSection.style.display = 'none';
});

// Show Register Form
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerSection.style.display = 'block';
  loginSection.style.display = 'none';
});

// Login Functionality
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  // Simulate login (replace with actual authentication logic)
  alert(`Logged in as ${email}`);
  loginSection.style.display = 'none';
  logoutLink.style.display = 'block';
  loginLink.style.display = 'none';
  registerLink.style.display = 'none';
});

// Register Functionality
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  // Simulate registration (replace with actual registration logic)
  alert(`Registered as ${name}`);
  registerSection.style.display = 'none';
  loginSection.style.display = 'block';
});

// Logout Functionality
logoutLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Simulate logout
  alert('Logged out');
  logoutLink.style.display = 'none';
  loginLink.style.display = 'block';
  registerLink.style.display = 'block';
});