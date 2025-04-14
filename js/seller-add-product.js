
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and is a seller
    const currentUser = window.appData.currentUser;
    
    if (!currentUser || currentUser.role !== 'seller') {
        window.location.href = 'login.html';
        return;
    }
    
    // Populate categories dropdown
    const categorySelect = document.getElementById('product-category');
    window.appData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.slug;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
    
    // Handle product image preview
    const imageInput = document.getElementById('product-image');
    const imagePreview = document.getElementById('image-preview');
    
    imageInput.addEventListener('input', function() {
        const imageUrl = this.value.trim();
        
        if (imageUrl) {
            imagePreview.style.backgroundImage = `url(${imageUrl})`;
            imagePreview.classList.add('has-image');
        } else {
            imagePreview.style.backgroundImage = '';
            imagePreview.classList.remove('has-image');
        }
    });
    
    // Handle add specification button
    const addSpecBtn = document.getElementById('add-spec-btn');
    const specificationsContainer = document.getElementById('specifications-container');
    
    addSpecBtn.addEventListener('click', function() {
        const specRow = document.createElement('div');
        specRow.className = 'spec-row';
        
        specRow.innerHTML = `
            <div class="form-group">
                <input type="text" name="spec-key[]" placeholder="E.g., Weight">
            </div>
            <div class="form-group">
                <input type="text" name="spec-value[]" placeholder="E.g., 2 lbs">
            </div>
            <button type="button" class="remove-spec"><i class="fas fa-times"></i></button>
        `;
        
        specificationsContainer.appendChild(specRow);
        
        // Add event listener to the new remove button
        const removeBtn = specRow.querySelector('.remove-spec');
        removeBtn.addEventListener('click', function() {
            specificationsContainer.removeChild(specRow);
        });
    });
    
    // Handle existing remove specification buttons
    document.querySelectorAll('.remove-spec').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('.spec-row');
            specificationsContainer.removeChild(row);
        });
    });
    
    // Handle form submission
    const addProductForm = document.getElementById('add-product-form');
    
    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('product-name').value;
        const category = document.getElementById('product-category').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const salePrice = parseFloat(document.getElementById('product-sale-price').value) || null;
        const description = document.getElementById('product-description').value;
        const isFeatured = document.getElementById('product-featured').checked;
        const isOnSale = document.getElementById('product-sale').checked;
        const stock = parseInt(document.getElementById('product-stock').value);
        const image = document.getElementById('product-image').value;
        
        // Collect specifications
        const specKeys = document.querySelectorAll('input[name="spec-key[]"]');
        const specValues = document.querySelectorAll('input[name="spec-value[]"]');
        const specifications = {};
        
        for (let i = 0; i < specKeys.length; i++) {
            const key = specKeys[i].value.trim();
            const value = specValues[i].value.trim();
            
            if (key && value) {
                specifications[key] = value;
            }
        }
        
        // Validate required fields
        if (!name || !category || !price || !description || !stock || !image) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Create product object
        const productData = {
            name,
            category,
            price,
            salePrice: isOnSale ? salePrice : null,
            description,
            isFeatured,
            isOnSale,
            stock,
            image,
            specifications
        };
        
        // Add product
        const result = window.appData.addProduct(productData);
        
        if (result.success) {
            alert('Product added successfully!');
            window.location.href = 'seller-products.html';
        } else {
            alert(result.message || 'Error adding product');
        }
    });
    
    // Handle cancel button
    const cancelBtn = document.getElementById('cancel-btn');
    
    cancelBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
            window.location.href = 'seller-products.html';
        }
    });
});
