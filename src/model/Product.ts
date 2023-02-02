export interface Product {
  id: number;
  name: string;
  colors: Color[];
}

export interface Color {
  id: number;
  name: "желтый" | "синий" | "черный" | "белый" | "серый";
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
