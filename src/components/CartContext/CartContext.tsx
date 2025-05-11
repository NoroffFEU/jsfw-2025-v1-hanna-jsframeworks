import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, CartContextType } from "../../types/cart";
import { TProduct } from "../../types/products";

// Create context for cart site
const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Provides cart functionality and state to its child components.
 * @param {Object} props
 * @param {ReactNode} props.children - Components that will have access to the cart context.
 */
function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /**
   * Adds a product to the cart or increases its quantity if it already exists.
   * @param {TProduct} product - The product to add.
   */
  const addToCart = (product: TProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  /**
   * Removes a product from the cart by its ID.
   * @param {string} productId - ID of the product to remove.
   */
  const removeFromCart = (productId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId),
    );
  };

  /**
   * Updates the quantity of a specific product in the cart.
   * @param {string} productId - ID of the product.
   * @param {number} quantity - New quantity value.
   */
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  // Clears all the items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * Custom hook to access the cart context
 * @throws Will throw an error if used outside of a CartProvider.
 * @returns {CartContextType} The cart context value.
 */
function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export { CartProvider };
export { useCart };
