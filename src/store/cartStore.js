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
    }),
    {
      name: 'cart-storage'
    }
  )
);

export default useCartStore;