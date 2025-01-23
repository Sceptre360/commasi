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

// Modal Utility Functions
function openModal(modal) {
  modal.style.display = 'flex';
}

function closeModal(modal) {
  modal.style.display = 'none';
}

function resetForm(form) {
  form.reset();
}

// Open Login Modal
openLoginModal.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(loginModal);
});

// Open Register Modal
openRegisterModal.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(registerModal);
});

// Close Login Modal
closeLoginModal.addEventListener('click', () => {
  closeModal(loginModal);
});

// Close Register Modal
closeRegisterModal.addEventListener('click', () => {
  closeModal(registerModal);
});

// Close Modals When Clicking Outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    closeModal(loginModal);
  }
  if (e.target === registerModal) {
    closeModal(registerModal);
  }
});

// Login Functionality
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.success) {
      // Update UI for logged-in state
      logoutLink.style.display = 'block';
      openLoginModal.style.display = 'none';
      openRegisterModal.style.display = 'none';

      // Close login modal
      closeModal(loginModal);

      // Show welcome message
      alert(`Welcome, ${email}!`);
    } else {
      alert('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred during login. Please try again.');
  }
});

// Register Functionality
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();

    if (data.success) {
      // Show success message and switch to login
      alert('Registration successful! Please log in.');
      closeModal(registerModal);
      openModal(loginModal);

      // Pre-fill email in login form
      document.getElementById('loginEmail').value = email;
    } else {
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('An error occurred during registration. Please try again.');
  }
});

// Logout Functionality
logoutLink.addEventListener('click', (e) => {
  e.preventDefault();

  // Simulate logout
  logoutLink.style.display = 'none';
  openLoginModal.style.display = 'block';
  openRegisterModal.style.display = 'block';

  alert('You have been logged out successfully.');
});