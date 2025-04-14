
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Toggle password visibility
    const toggleBtns = document.querySelectorAll('.password-toggle');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const errorElement = document.getElementById('login-error');
            
            // Simple validation
            if (!email || !password) {
                errorElement.textContent = 'Please enter both email and password';
                return;
            }
            
            // Attempt login
            const success = window.appData.login(email, password);
            
            if (success) {
                // Redirect based on user role
                const user = window.appData.currentUser;
                if (user.role === 'seller') {
                    window.location.href = 'seller-dashboard.html';
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                errorElement.textContent = 'Invalid email or password';
            }
        });
    }
    
    // Register form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('register-first-name').value;
            const lastName = document.getElementById('register-last-name').value;
            const email = document.getElementById('register-email').value;
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const isSeller = document.getElementById('register-seller').checked;
            const errorElement = document.getElementById('register-error');
            
            // Simple validation
            if (!firstName || !lastName || !email || !username || !password) {
                errorElement.textContent = 'Please fill in all fields';
                return;
            }
            
            if (password !== confirmPassword) {
                errorElement.textContent = 'Passwords do not match';
                return;
            }
            
            // Prepare user data
            const userData = {
                username,
                email,
                password,
                firstName,
                lastName,
                role: isSeller ? 'seller' : 'customer'
            };
            
            // Register user
            const result = window.appData.register(userData);
            
            if (result.success) {
                // If registering as seller, redirect to seller onboarding
                if (isSeller) {
                    window.location.href = 'seller-onboarding.html';
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                errorElement.textContent = result.message || 'Registration failed';
            }
        });
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.appData.logout();
            window.location.href = 'index.html';
        });
    }
    
    // Update UI based on login status
    function updateUIForUser() {
        const currentUser = window.appData.currentUser;
        const userMenu = document.getElementById('user-menu');
        const loginLink = document.getElementById('login-link');
        const userDropdown = document.getElementById('user-dropdown');
        
        if (currentUser) {
            // User is logged in
            if (loginLink) {
                loginLink.innerHTML = `<i class="fas fa-user"></i> ${currentUser.firstName}`;
                loginLink.href = currentUser.role === 'seller' ? 'seller-dashboard.html' : 'account.html';
            }
            
            // Show dropdown on hover/click
            if (userMenu) {
                userMenu.addEventListener('mouseover', function() {
                    if (userDropdown) userDropdown.style.display = 'block';
                });
                
                userMenu.addEventListener('mouseout', function() {
                    if (userDropdown) userDropdown.style.display = 'none';
                });
            }
        } else {
            // User is not logged in
            if (loginLink) {
                loginLink.innerHTML = '<i class="fas fa-user"></i> Sign In';
                loginLink.href = 'login.html';
            }
            
            // Hide dropdown
            if (userDropdown) {
                userDropdown.style.display = 'none';
            }
        }
    }
    
    // Call on page load
    updateUIForUser();
});
