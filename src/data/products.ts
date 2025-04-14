
export interface Product {
  id: number;
  name: string;
  slug: string;
  categoryId: number;
  image: string;
  price: number;
  salePrice?: number;
  rating: number;
  isFeatured: boolean;
  isOnSale: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Professional Drill Set",
    slug: "professional-drill-set",
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1572981779307-38e022e01cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 159.99,
    rating: 4.8,
    isFeatured: true,
    isOnSale: false,
    description: "High-performance drill with multiple speed settings and accessories"
  },
  {
    id: 2,
    name: "Premium Hammer",
    slug: "premium-hammer",
    categoryId: 2,
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 29.99,
    rating: 4.6,
    isFeatured: true,
    isOnSale: false,
    description: "Ergonomic design with fiberglass handle for reduced vibration"
  },
  {
    id: 3,
    name: "Circular Saw",
    slug: "circular-saw",
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1623707648367-ac6dc2jk1799?ixlib=rb-4.0.3&w=500&auto=format&fit=crop",
    price: 129.99,
    salePrice: 99.99,
    rating: 4.7,
    isFeatured: true,
    isOnSale: true,
    description: "Powerful circular saw with laser guide for precise cutting"
  },
  {
    id: 4,
    name: "Pipe Wrench Set",
    slug: "pipe-wrench-set",
    categoryId: 3,
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 49.99,
    rating: 4.5,
    isFeatured: false,
    isOnSale: false,
    description: "Set of 3 heavy-duty pipe wrenches for plumbing projects"
  },
  {
    id: 5,
    name: "Digital Multimeter",
    slug: "digital-multimeter",
    categoryId: 4,
    image: "https://images.unsplash.com/photo-1643208936554-706b25c96aid?ixlib=rb-4.0.3&w=500&auto=format&fit=crop",
    price: 79.99,
    salePrice: 59.99,
    rating: 4.9,
    isFeatured: true,
    isOnSale: true,
    description: "Professional digital multimeter with auto-ranging function"
  },
  {
    id: 6,
    name: "Premium Paint Roller Kit",
    slug: "premium-paint-roller-kit",
    categoryId: 5,
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 24.99,
    rating: 4.4,
    isFeatured: false,
    isOnSale: false,
    description: "Complete kit with rollers, tray and extension pole"
  },
  {
    id: 7,
    name: "Garden Tool Set",
    slug: "garden-tool-set",
    categoryId: 6,
    image: "https://images.unsplash.com/photo-1593247549122-9c5f950aa2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 69.99,
    salePrice: 49.99,
    rating: 4.7,
    isFeatured: true,
    isOnSale: true,
    description: "5-piece garden tool set with carrying case"
  },
  {
    id: 8,
    name: "Cordless Impact Driver",
    slug: "cordless-impact-driver",
    categoryId: 1,
    image: "https://images.unsplash.com/photo-1643207438911-61574d05ce36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 139.99,
    rating: 4.8,
    isFeatured: true,
    isOnSale: false,
    description: "Powerful and compact with lithium-ion battery"
  },
];
