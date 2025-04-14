
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageId: string; // Unsplash photo ID
  image?: string; // Optional direct image URL
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Power Tools",
    slug: "power-tools",
    description: "Professional-grade power tools for every job",
    imageId: "1505743278473-d2f142af84a0",
  },
  {
    id: 2,
    name: "Hand Tools",
    slug: "hand-tools",
    description: "Quality hand tools for precision work",
    imageId: "1530124566582-a618bc2615dc",
  },
  {
    id: 3,
    name: "Electrical",
    slug: "electrical",
    description: "Everything for your electrical projects",
    imageId: "1586183039711-f90a08610547",
  },
  {
    id: 4,
    name: "Plumbing",
    slug: "plumbing",
    description: "Plumbing supplies for professionals",
    imageId: "1598326113625-deb9d8143ef9",
  },
  {
    id: 5,
    name: "Building Materials",
    slug: "building-materials",
    description: "Quality building supplies for construction",
    imageId: "1575517111238-aff062e02af1",
  },
  {
    id: 6,
    name: "Home & Garden",
    slug: "home-garden",
    description: "Enhance your outdoor living spaces",
    imageId: "1558904541-efa843a96f01",
  },
];

// Get a category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

// Get a category by ID
export function getCategoryById(id: number): Category | undefined {
  return categories.find((category) => category.id === id);
}
