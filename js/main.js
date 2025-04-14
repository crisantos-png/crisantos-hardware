
// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const cartCountElement = document.getElementById('cart-count');
const featuredProductsGrid = document.getElementById('featured-products-grid');
const saleProductsGrid = document.getElementById('sale-products-grid');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    renderFeaturedProducts();
    renderSaleProducts();
    updateCartCount();
});

// Mobile navigation toggle
function setupMobileNav() {
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Setup dropdown functionality for mobile
    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Only handle dropdown on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = trigger.nextElementSibling;
                dropdownMenu.classList.toggle('show');
            }
        });
    });
}

// Render featured products
function renderFeaturedProducts() {
    if (!featuredProductsGrid) return;
    
    const featuredProducts = window.appData.products.filter(product => product.isFeatured);
    featuredProductsGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to the add to cart buttons
    featuredProductsGrid.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId);
        });
    });
}

// Render sale products
function renderSaleProducts() {
    if (!saleProductsGrid) return;
    
    const saleProducts = window.appData.products.filter(product => product.isOnSale);
    saleProductsGrid.innerHTML = saleProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to the add to cart buttons
    saleProductsGrid.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId);
        });
    });
}

// Create product card HTML
function createProductCard(product) {
    const stars = renderStarRating(product.rating);
    
    return `
        <div class="product-card">
            ${product.isOnSale ? '<div class="product-badge">SALE</div>' : ''}
            <div class="product-image">
                <a href="product.html?slug=${product.slug}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            </div>
            <div class="product-info">
                <h3><a href="product.html?slug=${product.slug}">${product.name}</a></h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    ${stars}
                    <span class="rating-value">${product.rating}</span>
                </div>
                <div class="product-price">
                    ${product.isOnSale ? 
                        `<span class="sale-price">$${product.salePrice.toFixed(2)}</span>
                        <span class="original-price">$${product.price.toFixed(2)}</span>` : 
                        `<span class="regular-price">$${product.price.toFixed(2)}</span>`
                    }
                </div>
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

// Render star rating HTML
function renderStarRating(rating) {
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<span class="star filled">★</span>';
        } else {
            stars += '<span class="star">★</span>';
        }
    }
    
    return stars;
}

// Add a product to the cart
function addToCart(productId) {
    const product = window.appData.products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItemIndex = window.appData.cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex >= 0) {
        // Increase quantity if already in cart
        window.appData.cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart
        window.appData.cart.push({
            id: product.id,
            name: product.name,
            price: product.isOnSale && product.salePrice ? product.salePrice : product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(window.appData.cart));
    
    // Update UI
    updateCartCount();
    showAddToCartMessage(product.name);
}

// Update cart count in header
function updateCartCount() {
    if (!cartCountElement) return;
    
    const totalItems = window.appData.cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Show message when item is added to cart
function showAddToCartMessage(productName) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle"></i>
            <span>${productName} added to cart</span>
        </div>
    `;
    
    // Add toast styles
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'var(--ch-blue)';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '4px';
    toast.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    toast.style.zIndex = '1000';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    
    // Append toast to body
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
