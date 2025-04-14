
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
        slug: "professional-cordless-drill"
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
        slug: "premium-hammer-set"
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
        slug: "heavy-duty-circular-saw"
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
        slug: "multi-tool-kit"
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
        slug: "smart-digital-measuring-tape"
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
        slug: "electric-impact-wrench"
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

// Cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Export products and categories for use in other JS files
window.appData = {
    products,
    categories,
    cart
};
