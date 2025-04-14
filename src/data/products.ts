
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  image: string;
  category: number;
  rating: number;
  stock: number;
  brand: string;
  isFeatured: boolean;
  isOnSale: boolean;
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Drill Kit",
    slug: "professional-drill-kit",
    description: "High-performance cordless drill with lithium-ion battery, multiple speed settings and LED light for working in dim environments. Includes carrying case and 10 drill bits.",
    price: 149.99,
    salePrice: 129.99,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=80",
    category: 1,
    rating: 4.8,
    stock: 15,
    brand: "PowerPro",
    isFeatured: true,
    isOnSale: true,
    specifications: {
      "Power": "20V",
      "Battery": "Lithium-Ion",
      "Chuck Size": "1/2 inch",
      "Speed Settings": "2",
      "Weight": "3.5 lbs",
      "Includes": "Carrying case, charger, 10 drill bits"
    }
  },
  {
    id: 2,
    name: "Premium Circular Saw",
    slug: "premium-circular-saw",
    description: "Professional-grade circular saw with 15-amp motor and 7-1/4 inch blade. Features adjustable depth and bevel settings for precise cuts, plus built-in dust blower for clear sightlines.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
    category: 1,
    rating: 4.7,
    stock: 8,
    brand: "CutMaster",
    isFeatured: true,
    isOnSale: false,
    specifications: {
      "Power": "15 Amp",
      "Blade": "7-1/4 inch",
      "Speed": "5800 RPM",
      "Bevel": "0-56 degrees",
      "Weight": "10.5 lbs",
      "Cord Length": "8 ft"
    }
  },
  {
    id: 3,
    name: "Heavy-Duty Tool Set",
    slug: "heavy-duty-tool-set",
    description: "Complete 215-piece tool set with ratcheting wrenches, sockets, pliers, screwdrivers and more. All tools manufactured from high-quality chrome vanadium steel with ergonomic grip handles.",
    price: 199.99,
    salePrice: 169.99,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=80",
    category: 2,
    rating: 4.9,
    stock: 5,
    brand: "MasterCraft",
    isFeatured: true,
    isOnSale: true,
    specifications: {
      "Pieces": "215",
      "Case": "Heavy-duty molded",
      "Material": "Chrome Vanadium Steel",
      "Finish": "Polished Chrome",
      "SAE/Metric": "Both included",
      "Warranty": "Lifetime"
    }
  },
  {
    id: 4,
    name: "Adjustable Wrench Set",
    slug: "adjustable-wrench-set",
    description: "Set of 3 adjustable wrenches (6, 8, and 10 inch) with precise jaw adjustment and measurement scales. Forged from chrome vanadium steel with knurled adjustment wheel for easy use.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&auto=format&fit=crop&q=80",
    category: 2,
    rating: 4.5,
    stock: 20,
    brand: "GripTight",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Sizes": "6, 8, and 10 inch",
      "Material": "Chrome Vanadium Steel",
      "Finish": "Satin Chrome",
      "Jaw Capacity": "Up to 1-1/2 inch",
      "Scale": "SAE and Metric",
      "Handle": "Ergonomic grip"
    }
  },
  {
    id: 5,
    name: "Smart LED Worklight",
    slug: "smart-led-worklight",
    description: "Rechargeable LED work light with adjustable brightness up to 5000 lumens. Features 360° rotating head, magnetic base, and power bank function. Water and impact resistant for tough work environments.",
    price: 89.99,
    salePrice: 74.99,
    image: "https://images.unsplash.com/photo-1621706232880-9e035cf081db?w=800&auto=format&fit=crop&q=80",
    category: 3,
    rating: 4.6,
    stock: 12,
    brand: "BrightForce",
    isFeatured: false,
    isOnSale: true,
    specifications: {
      "Brightness": "5000 lumens",
      "Battery": "10000mAh rechargeable",
      "Runtime": "Up to 8 hours",
      "Waterproof": "IP65 rated",
      "Features": "Power bank, magnetic base",
      "Weight": "1.8 lbs"
    }
  },
  {
    id: 6,
    name: "Professional Pipe Wrench",
    slug: "professional-pipe-wrench",
    description: "Heavy-duty cast iron pipe wrench with hardened teeth for superior grip. Features quick-adjust nut for fast operation and comfortable I-beam handle for reduced hand fatigue.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=800&auto=format&fit=crop&q=80",
    category: 4,
    rating: 4.4,
    stock: 15,
    brand: "FlowMaster",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Size": "14 inch",
      "Material": "Cast Iron",
      "Jaw Type": "Hardened teeth",
      "Handle": "I-beam design",
      "Capacity": "Up to 2 inch pipe",
      "Weight": "3.2 lbs"
    }
  },
  {
    id: 7,
    name: "Impact Driver Kit",
    slug: "impact-driver-kit",
    description: "Powerful 20V impact driver with brushless motor delivering 1,800 in-lbs of torque. Features 3-speed settings, built-in LED light, and battery fuel gauge. Includes two batteries, charger, and carrying case.",
    price: 159.99,
    salePrice: 139.99,
    image: "https://images.unsplash.com/photo-1616321507303-0932263d2d3f?w=800&auto=format&fit=crop&q=80",
    category: 1,
    rating: 4.9,
    stock: 10,
    brand: "PowerPro",
    isFeatured: true,
    isOnSale: true,
    specifications: {
      "Power": "20V",
      "Torque": "1,800 in-lbs",
      "Speed Settings": "3",
      "Motor": "Brushless",
      "Chuck": "1/4 inch hex",
      "Includes": "2 batteries, charger, case"
    }
  },
  {
    id: 8,
    name: "Digital Multimeter",
    slug: "digital-multimeter",
    description: "Professional digital multimeter with voltage, current, resistance, and continuity testing. Features large LCD display, auto-ranging, and overload protection. Includes test leads and carrying case.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1607793985449-5e98bb41a944?w=800&auto=format&fit=crop&q=80",
    category: 3,
    rating: 4.7,
    stock: 18,
    brand: "VoltGuard",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Voltage": "600V AC/DC",
      "Current": "10A AC/DC",
      "Resistance": "40MΩ",
      "Continuity": "Audible beep",
      "Display": "LCD",
      "Safety": "CAT III 600V"
    }
  },
  {
    id: 9,
    name: "Cordless Jigsaw",
    slug: "cordless-jigsaw",
    description: "20V cordless jigsaw with variable speed control and tool-free blade change. Features adjustable bevel footplate and LED work light. Battery and charger sold separately.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1625153772834-2a448c934969?w=800&auto=format&fit=crop&q=80",
    category: 1,
    rating: 4.6,
    stock: 12,
    brand: "PowerPro",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Voltage": "20V",
      "Speed": "0-2400 SPM",
      "Stroke Length": "1 inch",
      "Bevel": "0-45 degrees",
      "Blade Change": "Tool-free",
      "Weight": "5.2 lbs"
    }
  },
  {
    id: 10,
    name: "Garden Tool Set",
    slug: "garden-tool-set",
    description: "5-piece garden tool set with trowel, hand rake, cultivator, weeder, and transplanting spade. Made from durable stainless steel with ergonomic wooden handles.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587341239686-f99ca21435ad?w=800&auto=format&fit=crop&q=80",
    category: 6,
    rating: 4.8,
    stock: 20,
    brand: "GreenThumb",
    isFeatured: true,
    isOnSale: false,
    specifications: {
      "Pieces": "5",
      "Material": "Stainless Steel",
      "Handles": "Wooden",
      "Includes": "Trowel, rake, cultivator, weeder, spade",
      "Storage": "Canvas bag",
      "Warranty": "5 years"
    }
  },
  {
    id: 11,
    name: "Insulated Screwdriver Set",
    slug: "insulated-screwdriver-set",
    description: "6-piece insulated screwdriver set with Phillips and flat-head tips. Rated for 1000V AC protection. Chrome vanadium steel blades with ergonomic cushion-grip handles.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1622543458610-9a75c8180151?w=800&auto=format&fit=crop&q=80",
    category: 3,
    rating: 4.5,
    stock: 15,
    brand: "VoltGuard",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Pieces": "6",
      "Voltage Rating": "1000V AC",
      "Material": "Chrome Vanadium Steel",
      "Tips": "Phillips and Flat-head",
      "Handles": "Cushion-grip",
      "Safety": "IEC 60900"
    }
  },
  {
    id: 12,
    name: "PVC Pipe Cutter",
    slug: "pvc-pipe-cutter",
    description: "Ratchet-type PVC pipe cutter with high-leverage design for clean, easy cuts. Cuts PVC, CPVC, PP, and PE pipe up to 1-5/8 inch diameter. Features durable aluminum construction.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1624977559698-37aa89e5491c?w=800&auto=format&fit=crop&q=80",
    category: 4,
    rating: 4.3,
    stock: 10,
    brand: "FlowMaster",
    isFeatured: false,
    isOnSale: true,
    salePrice: 24.99,
    specifications: {
      "Capacity": "1-5/8 inch",
      "Material": "Aluminum",
      "Type": "Ratchet",
      "Application": "PVC, CPVC, PP, PE",
      "Blade": "Replaceable",
      "Tool Weight": "0.8 lbs"
    }
  },
  {
    id: 13,
    name: "Brick Hammer",
    slug: "brick-hammer",
    description: "20 oz. brick hammer with forged steel head and shock-reduction grip. Designed for splitting bricks and concrete blocks. Fully polished head with beveled edges.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588037-4ef133174ffc?w=800&auto=format&fit=crop&q=80",
    category: 5,
    rating: 4.6,
    stock: 15,
    brand: "StoneCraft",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Head Weight": "20 oz.",
      "Head Material": "Forged Steel",
      "Handle": "Shock-reduction grip",
      "Application": "Splitting bricks and blocks",
      "Finish": "Polished",
      "Total Weight": "2.2 lbs"
    }
  },
  {
    id: 14,
    name: "Safety Glasses",
    slug: "safety-glasses",
    description: "Lightweight safety glasses with scratch-resistant lenses and adjustable temples. Provides 99% UV protection. Meets ANSI Z87.1 standards.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1615031994739-932880449507?w=800&auto=format&fit=crop&q=80",
    category: 5,
    rating: 4.4,
    stock: 50,
    brand: "SafeView",
    isFeatured: false,
    isOnSale: false,
    specifications: {
      "Lens Material": "Polycarbonate",
      "UV Protection": "99%",
      "Standards": "ANSI Z87.1",
      "Features": "Scratch-resistant lenses",
      "Item Weight": "0.1 lbs",
      "Color": "Clear"
    }
  },
  {
    id: 15,
    name: "Wheelbarrow",
    slug: "wheelbarrow",
    description: "6 cubic foot wheelbarrow with steel tray and pneumatic tire. Features ergonomic handles and heavy-duty construction for easy maneuverability and long-lasting use.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1617198185843-99a5914c5413?w=800&auto=format&fit=crop&q=80",
    category: 6,
    rating: 4.7,
    stock: 7,
    brand: "YardMaster",
    isFeatured: true,
    isOnSale: false,
    specifications: {
      "Capacity": "6 cu. ft.",
      "Tray Material": "Steel",
      "Tire Type": "Pneumatic",
      "Handles": "Ergonomic",
      "Weight Capacity": "300 lbs",
      "Product Weight": "35 lbs"
    }
  }
];

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Get product by ID
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

// Get products by category ID
export function getProductsByCategoryId(categoryId: number): Product[] {
  return products.filter((product) => product.category === categoryId);
}

// Get featured products
export function getFeaturedProducts(limit?: number): Product[] {
  const featuredProducts = products.filter((product) => product.isFeatured);
  return limit ? featuredProducts.slice(0, limit) : featuredProducts;
}

// Get sale products
export function getSaleProducts(limit?: number): Product[] {
  const saleProducts = products.filter((product) => product.isOnSale);
  return limit ? saleProducts.slice(0, limit) : saleProducts;
}

// Search products
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
  );
}
