/* eslint-disable no-unused-vars */
import { TProduct } from "./products";

export interface CartItem {
  product: TProduct;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: TProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
