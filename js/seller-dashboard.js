
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and is a seller
    const currentUser = window.appData.currentUser;
    
    if (!currentUser || currentUser.role !== 'seller') {
        window.location.href = 'login.html';
        return;
    }
    
    // Set current date
    const dateDisplay = document.getElementById('current-date');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
    
    // Get seller data
    const seller = window.appData.sellers.find(s => s.userId === currentUser.id);
    if (!seller) {
        console.error("Seller data not found");
        return;
    }
    
    // Get seller's products
    const sellerProducts = window.appData.getSellerProducts(seller.id);
    
    // Update statistics
    document.getElementById('total-products').textContent = sellerProducts.length;
    document.getElementById('seller-rating').textContent = seller.rating.toFixed(1);
    
    // Populate recent products table
    const recentProductsTable = document.getElementById('recent-products-table');
    const recentProducts = sellerProducts.slice(0, 5); // Take up to 5 recent products
    
    recentProducts.forEach(product => {
        const category = window.appData.categories.find(cat => cat.slug === product.category);
        const categoryName = category ? category.name : 'Uncategorized';
        
        // Create status badge
        let statusBadge;
        if (product.stock > 10) {
            statusBadge = '<span class="status-badge status-active">In Stock</span>';
        } else if (product.stock > 0) {
            statusBadge = '<span class="status-badge status-pending">Low Stock</span>';
        } else {
            statusBadge = '<span class="status-badge status-out-of-stock">Out of Stock</span>';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="product-cell">
                    <div class="product-name">${product.name}</div>
                </div>
            </td>
            <td>${categoryName}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${statusBadge}</td>
            <td>
                <div class="actions">
                    <button class="action-btn edit" data-id="${product.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" data-id="${product.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        
        recentProductsTable.appendChild(row);
    });
    
    // Add event listeners to edit and delete buttons
    const editButtons = document.querySelectorAll('.action-btn.edit');
    const deleteButtons = document.querySelectorAll('.action-btn.delete');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            window.location.href = `seller-edit-product.html?id=${productId}`;
        });
    });
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            if (confirm('Are you sure you want to delete this product?')) {
                const result = window.appData.deleteProduct(productId);
                if (result.success) {
                    alert('Product deleted successfully');
                    window.location.reload();
                } else {
                    alert(result.message || 'Failed to delete product');
                }
            }
        });
    });
    
    // Simulate order data (in a real app, this would come from the backend)
    const orders = [
        {
            id: 'ORD-001',
            date: '2023-05-15',
            customer: 'John Doe',
            total: 129.99,
            status: 'Pending'
        },
        {
            id: 'ORD-002',
            date: '2023-05-14',
            customer: 'Jane Smith',
            total: 79.98,
            status: 'Fulfilled'
        },
        {
            id: 'ORD-003',
            date: '2023-05-13',
            customer: 'Michael Brown',
            total: 199.99,
            status: 'Fulfilled'
        }
    ];
    
    // Calculate total revenue (in a real app, this would be more comprehensive)
    let totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    document.getElementById('total-orders').textContent = orders.length;
    document.getElementById('total-revenue').textContent = '$' + totalRevenue.toFixed(2);
    
    // Populate recent orders table
    const recentOrdersTable = document.getElementById('recent-orders-table');
    
    orders.forEach(order => {
        // Create status badge
        let statusBadge;
        if (order.status === 'Fulfilled') {
            statusBadge = '<span class="status-badge status-fulfilled">Fulfilled</span>';
        } else {
            statusBadge = '<span class="status-badge status-pending">Pending</span>';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.date}</td>
            <td>${order.customer}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td>${statusBadge}</td>
            <td>
                <div class="actions">
                    <button class="action-btn view" data-id="${order.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </td>
        `;
        
        recentOrdersTable.appendChild(row);
    });
    
    // Add event listeners to view order buttons
    const viewButtons = document.querySelectorAll('.action-btn.view');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const orderId = this.dataset.id;
            window.location.href = `seller-view-order.html?id=${orderId}`;
        });
    });
});
