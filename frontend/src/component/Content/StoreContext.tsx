import React, { useEffect, createContext, useState } from "react";
import { food_list } from "../../assets/assets";

// Define type for cartItems
type CartItems = { [itemId: string]: number };

export const StoreContext = createContext<{
  food_list: {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
  }[];
  cartItems: CartItems;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
}>({
  food_list: [],
  cartItems: {},
  setCartItems: () => {},
  addToCart: (itemId: string) => {},
  removeFromCart: (itemId: string) => {},
});

interface StoreContextProviderProps {
  children: React.ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addToCart = (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId: string) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      const updatedCart = { ...cartItems };
      delete updatedCart[itemId];
      setCartItems(updatedCart);
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  // Return StoreContext.Provider directly
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
