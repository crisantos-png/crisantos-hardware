
// DOM Elements
const cartContainer = document.getElementById('cart-container');
const checkoutBtn = document.getElementById('checkout-btn');

// Initialize the cart page
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// Render the shopping cart
function renderCart() {
    if (!cartContainer) return;

    const cart = window.appData.cart;
    
    if (cart.length === 0) {
        // Render empty cart message
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="products.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        
        // Disable checkout button
        if (checkoutBtn) {
            checkoutBtn.classList.add('disabled');
            checkoutBtn.setAttribute('disabled', 'disabled');
        }
    } else {
        // Calculate cart summary
        const { subtotal, shipping, tax, total } = calculateCartSummary(cart);
        
        // Render cart items and summary
        cartContainer.innerHTML = `
            <div class="cart-table-container">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map(item => createCartItemRow(item)).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="cart-summary">
                <div class="summary-row">
                    <span class="summary-label">Subtotal</span>
                    <span class="summary-value">$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Shipping</span>
                    <span class="summary-value">$${shipping.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Tax</span>
                    <span class="summary-value">$${tax.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label summary-total">Total</span>
                    <span class="summary-value summary-total">$${total.toFixed(2)}</span>
                </div>
            </div>
        `;
        
        // Enable checkout button
        if (checkoutBtn) {
            checkoutBtn.classList.remove('disabled');
            checkoutBtn.removeAttribute('disabled');
        }
        
        // Add event listeners for cart interactions
        setupCartInteractions();
    }
}

// Create HTML for a cart item row
function createCartItemRow(item) {
    const subtotal = item.price * item.quantity;
    
    return `
        <tr data-id="${item.id}">
            <td data-label="Product">
                <div class="cart-product">
                    <div class="cart-product-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-product-name">
                        <a href="product.html?id=${item.id}">${item.name}</a>
                    </div>
                </div>
            </td>
            <td data-label="Price">
                <span class="cart-price">$${item.price.toFixed(2)}</span>
            </td>
            <td data-label="Quantity">
                <div class="cart-quantity">
                    <button class="quantity-btn quantity-decrease" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn quantity-increase" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </td>
            <td data-label="Subtotal">
                <span class="cart-subtotal">$${subtotal.toFixed(2)}</span>
            </td>
            <td>
                <button class="cart-remove" data-id="${item.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    `;
}

// Calculate cart summary (subtotal, shipping, tax, total)
function calculateCartSummary(cart) {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping for orders over $100
    const taxRate = 0.08; // 8% tax rate
    const tax = subtotal * taxRate;
    const total = subtotal + shipping + tax;
    
    return { subtotal, shipping, tax, total };
}

// Setup cart interaction event listeners
function setupCartInteractions() {
    // Quantity increase buttons
    document.querySelectorAll('.quantity-increase').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateItemQuantity(id, 1);
        });
    });
    
    // Quantity decrease buttons
    document.querySelectorAll('.quantity-decrease').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateItemQuantity(id, -1);
        });
    });
    
    // Quantity input fields
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.dataset.id);
            let value = parseInt(this.value);
            
            // Ensure quantity is at least 1
            if (isNaN(value) || value < 1) {
                value = 1;
                this.value = 1;
            }
            
            setItemQuantity(id, value);
        });
    });
    
    // Remove item buttons
    document.querySelectorAll('.cart-remove').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            removeCartItem(id);
        });
    });
}

// Update cart item quantity (add or subtract)
function updateItemQuantity(id, change) {
    const cart = window.appData.cart;
    const index = cart.findIndex(item => item.id === id);
    
    if (index !== -1) {
        cart[index].quantity += change;
        
        // Ensure quantity is at least 1
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1;
        }
        
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartCount();
        renderCart();
    }
}

// Set cart item quantity to a specific value
function setItemQuantity(id, quantity) {
    const cart = window.appData.cart;
    const index = cart.findIndex(item => item.id === id);
    
    if (index !== -1) {
        cart[index].quantity = quantity;
        
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartCount();
        renderCart();
    }
}

// Remove item from cart
function removeCartItem(id) {
    let cart = window.appData.cart;
    
    // Filter out the item to remove
    cart = cart.filter(item => item.id !== id);
    window.appData.cart = cart;
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    renderCart();
}
