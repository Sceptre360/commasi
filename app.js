document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const userMenuButton = document.getElementById('userMenuButton');
  const authDropdown = document.getElementById('authDropdown');
  const openLoginModal = document.getElementById('openLoginModal');
  const openRegisterModal = document.getElementById('openRegisterModal');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeModals = document.querySelectorAll('.close-modal');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const logoutLink = document.getElementById('logoutLink');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');

  // Modal Utility Functions
  function openModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetForm(modal.querySelector('form'));
  }

  function resetForm(form) {
    form.reset();
    form.querySelectorAll('.input-group label').forEach(label => {
      label.style.top = '50%';
      label.style.fontSize = '1rem';
      label.style.background = 'transparent';
    });
  }

  // User Menu Dropdown
  userMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    authDropdown.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-menu')) {
      authDropdown.classList.remove('show');
    }
  });

  // Modal Handling
  openLoginModal.addEventListener('click', () => {
    openModal(loginModal);
    authDropdown.classList.remove('show');
  });

  openRegisterModal.addEventListener('click', () => {
    openModal(registerModal);
    authDropdown.classList.remove('show');
  });

  // Modal Switching
  switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(loginModal);
    openModal(registerModal);
  });

  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(registerModal);
    openModal(loginModal);
  });

  // Close Modals
  closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(loginModal);
      closeModal(registerModal);
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal || e.target === registerModal) {
      closeModal(loginModal);
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
        userMenuButton.style.display = 'none';
        closeModal(loginModal);
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
        alert('Registration successful! Please log in.');
        closeModal(registerModal);
        openModal(loginModal);
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
    logoutLink.style.display = 'none';
    userMenuButton.style.display = 'block';
    alert('You have been logged out successfully.');
  });
});