export interface Product {
  id: number;
  name: string;
  colors: Color[];
}

export interface Color {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

export interface Sizes {
  id: number;
  label: string;
  number: number;
}
