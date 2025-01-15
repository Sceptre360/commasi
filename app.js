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
  e.preventDefault(); // Prevent default button behavior
  openModal(loginModal);
});

// Open Register Modal
openRegisterModal.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default button behavior
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
    // Replace with actual authentication logic
    const response = await authenticateUser(email, password);
    
    if (response.success) {
      // Update UI for logged-in state
      logoutLink.style.display = 'block';
      openLoginModal.style.display = 'none';
      openRegisterModal.style.display = 'none';
      
      // Close login modal
      closeModal(loginModal);
      
      // Optional: Show welcome message or redirect
      alert(`Welcome, ${email}!`);
    } else {
      // Show error message
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
    // Replace with actual registration logic
    const response = await registerUser(name, email, password);
    
    if (response.success) {
      // Show success message and switch to login
      alert('Registration successful! Please log in.');
      closeModal(registerModal);
      openModal(loginModal);
      
      // Optional: Pre-fill email in login form
      document.getElementById('loginEmail').value = email;
    } else {
      // Show registration error
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
  
  // Simulate logout (replace with actual logout logic)
  logoutLink.style.display = 'none';
  openLoginModal.style.display = 'block';
  openRegisterModal.style.display = 'block';
  
  alert('You have been logged out successfully.');
});

// Placeholder authentication functions (to be replaced with actual backend calls)
async function authenticateUser(email, password) {
  // Simulate API call
  return new Promise((resolve) => {
    // Simulated validation
    if (email && password) {
      resolve({ success: true });
    } else {
      resolve({ success: false });
    }
  });
}

async function registerUser(name, email, password) {
  // Simulate API call
  return new Promise((resolve) => {
    // Simulated validation
    if (name && email && password) {
      resolve({ success: true });
    } else {
      resolve({ success: false });
    }
  });
}