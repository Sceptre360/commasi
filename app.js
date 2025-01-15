// DOM Elements
const openLoginModal = document.getElementById('openLoginModal');
const openRegisterModal = document.getElementById('openRegisterModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutLink = document.getElementById('logoutLink');

// Open Login Modal
openLoginModal.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Open Register Modal
openRegisterModal.addEventListener('click', () => {
  registerModal.style.display = 'flex';
});

// Close Login Modal
closeLoginModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close Register Modal
closeRegisterModal.addEventListener('click', () => {
  registerModal.style.display = 'none';
});

// Close Modals When Clicking Outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (e.target === registerModal) {
    registerModal.style.display = 'none';
  }
});

// Login Functionality
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  // Simulate login (replace with actual authentication logic)
  alert(`Logged in as ${email}`);
  loginModal.style.display = 'none';
  logoutLink.style.display = 'block';
  openLoginModal.style.display = 'none';
  openRegisterModal.style.display = 'none';
});

// Register Functionality
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  // Simulate registration (replace with actual registration logic)
  alert(`Registered as ${name}`);
  registerModal.style.display = 'none';
  loginModal.style.display = 'flex';
});

// Logout Functionality
logoutLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Simulate logout
  alert('Logged out');
  logoutLink.style.display = 'none';
  openLoginModal.style.display = 'block';
  openRegisterModal.style.display = 'block';
});