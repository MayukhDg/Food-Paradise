import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  cartValue: 0,
  setCartItems: (cartItems) => set({ cartItems }),
  setCartValue: (cartValue) => set({ cartValue }),
  
  addToCart: (item) =>
    set((state) => {
      const exists = state.cartItems.some((i) => i.id === item.id);
      let cartItems;
      if (!exists) {
        cartItems = [...state.cartItems, { ...item, quantity: 1 }];
      } else {
        cartItems = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return {
        cartItems,
        cartValue: state.cartValue + item.price,
      };
    }),

  removeFromCart: (id, price) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (!existingItem) return {};
      let cartItems;
      if (existingItem.quantity === 1) {
        cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        cartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return {
        cartItems,
        cartValue: state.cartValue - price
      };
    }),
}));