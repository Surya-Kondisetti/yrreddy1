export class Product {
  id: number;           // Unique identifier for the product (optional, but useful for tracking or updating products)
  name: string;         // Name of the product
  category: string;     // Category the product belongs to (e.g., "Medical Equipment", "Surgical Instruments")
  price: number;        // Price of the product
  imageUrl: string;     // URL to the product image
  description?: string; // Optional description of the product
  stockQuantity?: number; // Optional field to indicate how many of the product are in stock
  rating?: number;
}
