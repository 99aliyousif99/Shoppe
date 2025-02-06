import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((product) => product.id !== productId),
      })),
      updateCart: (quantities) => set((state) => ({
        cart: state.cart.map((product) => ({
          ...product,
          quantity: quantities[product.id] || product.quantity,
        })),
      })),
    }),
    {
      name: 'cart-storage'
    }
  )
);

export default useCartStore;