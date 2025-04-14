
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Power Tools",
    slug: "power-tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Professional-grade power tools for any job"
  },
  {
    id: 2,
    name: "Hand Tools",
    slug: "hand-tools",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Quality hand tools for precision work"
  },
  {
    id: 3,
    name: "Plumbing",
    slug: "plumbing",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Everything you need for plumbing repairs"
  },
  {
    id: 4,
    name: "Electrical",
    slug: "electrical",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Electrical supplies for home and professional use"
  },
  {
    id: 5,
    name: "Paint & Supplies",
    slug: "paint-supplies",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Premium paints and painting supplies"
  },
  {
    id: 6,
    name: "Outdoor & Garden",
    slug: "outdoor-garden",
    image: "https://images.unsplash.com/photo-1520412099551-87b31548d969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Tools and equipment for your outdoor projects"
  },
];
