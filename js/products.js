
// Products Data
const products = [
    {
        id: 1,
        name: "Professional Cordless Drill",
        description: "High-performance 20V cordless drill with variable speed and LED light. Perfect for DIY and professional use.",
        price: 129.99,
        salePrice: 99.99,
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
        rating: 4.8,
        isOnSale: true,
        isFeatured: true,
        category: "power-tools",
        slug: "professional-cordless-drill",
        sellerId: 1,
        specifications: {
            "Power": "20V",
            "Speed": "0-1500 RPM",
            "Chuck Size": "1/2 inch",
            "Weight": "3.5 lbs"
        },
        stock: 15
    },
    {
        id: 2,
        name: "Premium Hammer Set",
        description: "Set of 3 premium hammers with ergonomic handles and balanced weight distribution for precision work.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&auto=format&fit=crop&q=80",
        rating: 4.5,
        isOnSale: false,
        isFeatured: true,
        category: "hand-tools",
        slug: "premium-hammer-set",
        sellerId: 1,
        specifications: {
            "Material": "Forged Steel",
            "Handle": "Ergonomic Rubber Grip",
            "Sizes": "8oz, 16oz, 24oz",
            "Weight": "3.2 lbs (total)"
        },
        stock: 22
    },
    {
        id: 3,
        name: "Heavy-Duty Circular Saw",
        description: "Powerful 15-amp circular saw with laser guide and dust blower for clean, accurate cuts every time.",
        price: 159.99,
        salePrice: 129.99,
        image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=80",
        rating: 4.7,
        isOnSale: true,
        isFeatured: true,
        category: "power-tools",
        slug: "heavy-duty-circular-saw",
        sellerId: 2,
        specifications: {
            "Power": "15 Amp",
            "Speed": "5800 RPM",
            "Blade Size": "7-1/4 inches",
            "Bevel Capacity": "56°"
        },
        stock: 8
    },
    {
        id: 4,
        name: "Multi-Tool Kit",
        description: "Comprehensive 150-piece tool kit with ratcheting screwdriver, pliers, wrenches and more in a portable case.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=80",
        rating: 4.6,
        isOnSale: false,
        isFeatured: true,
        category: "hand-tools",
        slug: "multi-tool-kit",
        sellerId: 2,
        specifications: {
            "Pieces": "150",
            "Case Material": "ABS Plastic",
            "Weight": "12 lbs",
            "Warranty": "Lifetime"
        },
        stock: 30
    },
    {
        id: 5,
        name: "Smart Digital Measuring Tape",
        description: "Digital measuring tape with LCD display, memory function and unit conversion. Accurate to within 1mm.",
        price: 34.99,
        salePrice: 29.99,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
        rating: 4.3,
        isOnSale: true,
        isFeatured: false,
        category: "hand-tools",
        slug: "smart-digital-measuring-tape",
        sellerId: 1,
        specifications: {
            "Length": "16 ft",
            "Display": "LCD",
            "Battery": "CR2032",
            "Units": "in/cm/mm"
        },
        stock: 45
    },
    {
        id: 6,
        name: "Electric Impact Wrench",
        description: "High-torque impact wrench with 1/2-inch drive, delivering up to 300 ft-lbs of torque for tough jobs.",
        price: 149.99,
        salePrice: 119.99,
        image: "https://images.unsplash.com/photo-1580250864656-cd501faa9c76?w=800&auto=format&fit=crop&q=80",
        rating: 4.9,
        isOnSale: true,
        isFeatured: false,
        category: "power-tools",
        slug: "electric-impact-wrench",
        sellerId: 3,
        specifications: {
            "Torque": "300 ft-lbs",
            "Power": "8.5 Amp",
            "Drive Size": "1/2 inch",
            "Speed": "2200 RPM"
        },
        stock: 12
    }
];

// Categories Data
const categories = [
    {
        id: 1,
        name: "Power Tools",
        image: "images/categories/power-tools.jpg",
        slug: "power-tools"
    },
    {
        id: 2,
        name: "Hand Tools",
        image: "images/categories/hand-tools.jpg",
        slug: "hand-tools"
    },
    {
        id: 3,
        name: "Electrical",
        image: "images/categories/electrical.jpg",
        slug: "electrical"
    },
    {
        id: 4,
        name: "Plumbing",
        image: "images/categories/plumbing.jpg",
        slug: "plumbing"
    },
    {
        id: 5,
        name: "Building Materials",
        image: "images/categories/building-materials.jpg",
        slug: "building-materials"
    },
    {
        id: 6,
        name: "Home & Garden",
        image: "images/categories/home-garden.jpg",
        slug: "home-garden"
    }
];

// Users Data
const users = [
    {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        password: "hashed_password_1", // In real app, these would be properly hashed
        firstName: "John",
        lastName: "Doe",
        role: "customer",
        createdAt: "2023-01-15"
    },
    {
        id: 2,
        username: "jane_smith",
        email: "jane@example.com",
        password: "hashed_password_2",
        firstName: "Jane",
        lastName: "Smith",
        role: "customer",
        createdAt: "2023-02-20"
    },
    {
        id: 3,
        username: "tool_expert",
        email: "seller1@example.com",
        password: "hashed_password_3",
        firstName: "Robert",
        lastName: "Johnson",
        role: "seller",
        company: "ToolMaster Pro",
        createdAt: "2022-11-10"
    },
    {
        id: 4,
        username: "hardware_king",
        email: "seller2@example.com",
        password: "hashed_password_4",
        firstName: "Sarah",
        lastName: "Williams",
        role: "seller",
        company: "Hardware Kings",
        createdAt: "2022-12-05"
    }
];

// Sellers Data
const sellers = [
    {
        id: 1,
        userId: 3,
        companyName: "ToolMaster Pro",
        address: "123 Tool St, Hardware City, HC 12345",
        phone: "555-123-4567",
        rating: 4.8,
        productsCount: 25,
        joinedDate: "2022-11-10"
    },
    {
        id: 2,
        userId: 4,
        companyName: "Hardware Kings",
        address: "456 Build Ave, Craft Town, CT 67890",
        phone: "555-987-6543",
        rating: 4.5,
        productsCount: 18,
        joinedDate: "2022-12-05"
    },
    {
        id: 3,
        userId: 5,
        companyName: "Pro Tool Supplies",
        address: "789 Hammer Ln, Tool Town, TT 45678",
        phone: "555-456-7890",
        rating: 4.7,
        productsCount: 32,
        joinedDate: "2023-01-20"
    }
];

// Cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Current user session
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Authentication functions
function login(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        // In a real app, you would never store password in localStorage
        const userWithoutPassword = {...user};
        delete userWithoutPassword.password;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        currentUser = userWithoutPassword;
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
}

function register(userData) {
    // Check if user already exists
    if (users.find(user => user.email === userData.email)) {
        return { success: false, message: "Email already in use" };
    }
    
    // In a real app, you would hash the password
    const newUser = {
        id: users.length + 1,
        ...userData,
        createdAt: new Date().toISOString().split('T')[0]
    };
    
    users.push(newUser);
    
    // Auto login
    const userWithoutPassword = {...newUser};
    delete userWithoutPassword.password;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    currentUser = userWithoutPassword;
    
    return { success: true };
}

function registerAsSeller(userData, sellerData) {
    // Register user first
    const userResult = register({
        ...userData,
        role: "seller"
    });
    
    if (!userResult.success) {
        return userResult;
    }
    
    // Then add seller data
    const newSeller = {
        id: sellers.length + 1,
        userId: currentUser.id,
        companyName: sellerData.companyName,
        address: sellerData.address,
        phone: sellerData.phone,
        rating: 0,
        productsCount: 0,
        joinedDate: new Date().toISOString().split('T')[0]
    };
    
    sellers.push(newSeller);
    return { success: true };
}

// Product management functions for sellers
function addProduct(productData) {
    // Ensure user is a seller
    if (!currentUser || currentUser.role !== "seller") {
        return { success: false, message: "Not authorized" };
    }
    
    // Get seller ID
    const seller = sellers.find(s => s.userId === currentUser.id);
    if (!seller) {
        return { success: false, message: "Seller profile not found" };
    }
    
    // Create new product
    const newProduct = {
        id: products.length + 1,
        ...productData,
        sellerId: seller.id,
        rating: 0,
        slug: productData.name.toLowerCase().replace(/\s+/g, '-')
    };
    
    products.push(newProduct);
    
    // Update seller product count
    seller.productsCount++;
    
    return { success: true, product: newProduct };
}

function updateProduct(productId, updates) {
    // Ensure user is a seller
    if (!currentUser || currentUser.role !== "seller") {
        return { success: false, message: "Not authorized" };
    }
    
    // Find product
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        return { success: false, message: "Product not found" };
    }
    
    // Verify seller owns this product
    const seller = sellers.find(s => s.userId === currentUser.id);
    if (!seller || products[productIndex].sellerId !== seller.id) {
        return { success: false, message: "Not authorized to update this product" };
    }
    
    // Update product
    products[productIndex] = {
        ...products[productIndex],
        ...updates
    };
    
    return { success: true, product: products[productIndex] };
}

function deleteProduct(productId) {
    // Ensure user is a seller
    if (!currentUser || currentUser.role !== "seller") {
        return { success: false, message: "Not authorized" };
    }
    
    // Find product
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        return { success: false, message: "Product not found" };
    }
    
    // Verify seller owns this product
    const seller = sellers.find(s => s.userId === currentUser.id);
    if (!seller || products[productIndex].sellerId !== seller.id) {
        return { success: false, message: "Not authorized to delete this product" };
    }
    
    // Delete product
    const deletedProduct = products.splice(productIndex, 1)[0];
    
    // Update seller product count
    seller.productsCount--;
    
    return { success: true, product: deletedProduct };
}

// Get products by seller
function getSellerProducts(sellerId) {
    return products.filter(product => product.sellerId === sellerId);
}

// Export data and functions for use in other JS files
window.appData = {
    products,
    categories,
    cart,
    users,
    sellers,
    currentUser,
    login,
    logout,
    register,
    registerAsSeller,
    addProduct,
    updateProduct,
    deleteProduct,
    getSellerProducts
};
