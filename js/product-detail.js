
// DOM Elements
const productDetailContainer = document.getElementById('product-detail-container');
const productNameBreadcrumb = document.getElementById('product-name-breadcrumb');
const categoryLink = document.getElementById('category-link');
const relatedProductsGrid = document.getElementById('related-products-grid');

// Current product data
let currentProduct = null;

// Initialize the product detail page
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
});

// Load product details based on URL parameter
function loadProductDetails() {
    // Get product slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        showProductNotFound();
        return;
    }
    
    // Find product by slug
    const product = window.appData.products.find(p => p.slug === slug);
    
    if (!product) {
        showProductNotFound();
        return;
    }
    
    // Store current product
    currentProduct = product;
    
    // Update page title
    document.title = `${product.name} - Crisantos Hardware`;
    
    // Update breadcrumb
    updateBreadcrumb(product);
    
    // Render product details
    renderProductDetails(product);
    
    // Load related products
    loadRelatedProducts(product);
}

// Update breadcrumb with product info
function updateBreadcrumb(product) {
    if (productNameBreadcrumb) {
        productNameBreadcrumb.textContent = product.name;
    }
    
    if (categoryLink) {
        const category = window.appData.categories.find(cat => cat.slug === product.category);
        if (category) {
            categoryLink.innerHTML = `<a href="category.html?slug=${category.slug}">${category.name}</a>`;
        }
    }
}

// Render the product details
function renderProductDetails(product) {
    if (!productDetailContainer) return;
    
    // Generate HTML for product details
    productDetailContainer.innerHTML = `
        <div class="product-detail">
            <div class="product-gallery">
                <div class="product-main-image">
                    <img src="${product.image}" alt="${product.name}" id="main-product-image">
                </div>
                <div class="product-thumbnails">
                    <div class="product-thumbnail active" data-image="${product.image}">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <!-- Additional thumbnails would go here in a real product -->
                </div>
            </div>
            
            <div class="product-info-container">
                <div class="product-badges">
                    ${product.isOnSale ? '<span class="badge badge-sale">SALE</span>' : ''}
                    ${product.isFeatured ? '<span class="badge badge-featured">FEATURED</span>' : ''}
                </div>
                
                <h1 class="product-title">${product.name}</h1>
                
                <div class="product-rating-container">
                    <div class="product-rating">
                        ${renderStarRating(product.rating)}
                    </div>
                    <span class="review-count">${(product.rating * 10).toFixed(0)} Reviews</span>
                </div>
                
                <div class="product-price-container">
                    ${product.isOnSale ? 
                        `<span class="current-price sale-price">$${product.salePrice.toFixed(2)}</span>
                        <span class="original-price">$${product.price.toFixed(2)}</span>` : 
                        `<span class="current-price">$${product.price.toFixed(2)}</span>`
                    }
                </div>
                
                <div class="product-description">
                    <p>${product.description}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                    urna eu tincidunt consectetur, nisi nunc pretium nunc, euismod aliquam 
                    nunc nisl eu nunc. Sed euismod, urna eu tincidunt consectetur, nisi nunc 
                    pretium nunc, euismod aliquam nunc nisl eu nunc.</p>
                </div>
                
                <div class="product-meta">
                    <div class="meta-item">
                        <span class="meta-label">SKU:</span>
                        <span class="meta-value">CH-${product.id.toString().padStart(4, '0')}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Category:</span>
                        <span class="meta-value">${getCategoryName(product.category)}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Availability:</span>
                        <span class="meta-value">In Stock</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn decrease-quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="quantity-input" value="1" min="1" id="product-quantity">
                        <button class="quantity-btn increase-quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    
                    <button class="btn btn-primary add-to-cart-btn" id="add-to-cart-btn">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
                
                <div class="product-tabs">
                    <div class="tabs-nav">
                        <div class="tab-item active" data-tab="description">Description</div>
                        <div class="tab-item" data-tab="specifications">Specifications</div>
                        <div class="tab-item" data-tab="reviews">Reviews</div>
                    </div>
                    
                    <div class="tab-content active" id="description-tab">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc pretium nunc, euismod aliquam nunc nisl eu nunc. Sed euismod, urna eu tincidunt consectetur, nisi nunc pretium nunc, euismod aliquam nunc nisl eu nunc.</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
                        <ul>
                            <li>High-quality materials for durability</li>
                            <li>Ergonomic design for comfort</li>
                            <li>Precision engineering for accuracy</li>
                            <li>Versatile functionality for various applications</li>
                        </ul>
                    </div>
                    
                    <div class="tab-content" id="specifications-tab">
                        <table class="specifications-table">
                            <tr>
                                <th>Dimensions</th>
                                <td>10" x 5" x 2"</td>
                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td>2.5 lbs</td>
                            </tr>
                            <tr>
                                <th>Material</th>
                                <td>Hardened Steel / Rubberized Grip</td>
                            </tr>
                            <tr>
                                <th>Warranty</th>
                                <td>2-Year Limited Warranty</td>
                            </tr>
                            <tr>
                                <th>Country of Origin</th>
                                <td>USA</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="tab-content" id="reviews-tab">
                        <p>Customer reviews will be displayed here.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Set up event listeners for product interaction
    setupProductInteractions();
}

// Get category name from slug
function getCategoryName(slug) {
    const category = window.appData.categories.find(cat => cat.slug === slug);
    return category ? category.name : 'Uncategorized';
}

// Load related products
function loadRelatedProducts(product) {
    if (!relatedProductsGrid) return;
    
    // Get products in the same category, excluding current product
    let relatedProducts = window.appData.products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4); // Limit to 4 products
    
    // If not enough related products, add some featured products
    if (relatedProducts.length < 3) {
        const additionalProducts = window.appData.products
            .filter(p => p.id !== product.id && !relatedProducts.some(rp => rp.id === p.id))
            .slice(0, 3 - relatedProducts.length);
        
        relatedProducts = [...relatedProducts, ...additionalProducts];
    }
    
    // Render related products
    relatedProductsGrid.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners for add to cart buttons
    relatedProductsGrid.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            addToCart(productId);
        });
    });
}

// Setup product interaction event listeners
function setupProductInteractions() {
    // Quantity adjustment
    const quantityInput = document.getElementById('product-quantity');
    const decreaseBtn = document.querySelector('.decrease-quantity');
    const increaseBtn = document.querySelector('.increase-quantity');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    }
    
    // Add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn && currentProduct) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCartWithQuantity(currentProduct.id, quantity);
        });
    }
    
    // Tab switching
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.dataset.tab;
            
            // Remove active class from all tabs and contents
            tabItems.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to selected tab and content
            item.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Thumbnail switching
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imageUrl = thumbnail.dataset.image;
            
            // Update main image
            if (mainImage) {
                mainImage.src = imageUrl;
            }
            
            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
}

// Add product to cart with specific quantity
function addToCartWithQuantity(productId, quantity) {
    const product = window.appData.products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItemIndex = window.appData.cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex >= 0) {
        // Increase quantity if already in cart
        window.appData.cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        window.appData.cart.push({
            id: product.id,
            name: product.name,
            price: product.isOnSale && product.salePrice ? product.salePrice : product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(window.appData.cart));
    
    // Update UI
    updateCartCount();
    showAddToCartMessage(product.name, quantity);
}

// Show message when item is added to cart
function showAddToCartMessage(productName, quantity) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-check-circle"></i>
            <span>${quantity > 1 ? `${quantity} × ` : ''}${productName} added to cart</span>
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

// Show product not found message
function showProductNotFound() {
    if (!productDetailContainer) return;
    
    productDetailContainer.innerHTML = `
        <div class="product-not-found">
            <h2>Product Not Found</h2>
            <p>Sorry, we couldn't find the product you're looking for.</p>
            <a href="products.html" class="btn btn-primary">Browse Products</a>
        </div>
    `;
    
    // Update breadcrumb
    if (productNameBreadcrumb) {
        productNameBreadcrumb.textContent = 'Product Not Found';
    }
}
