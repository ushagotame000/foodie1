import React, { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

// Define type for cartItems

export type food_item = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
};
export const StoreContext = createContext<{
  cartItems: Array<food_item>;
  addToCart: (item: food_item) => void;
  removeFromCart: (itemId: string) => void;
}>({
  cartItems: [],
  addToCart: (item: food_item) => {},
  removeFromCart: (itemId: string) => {},
});

interface StoreContextProviderProps {
  children: React.ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState<Array<food_item>>([]);

  const addToCart = (item: food_item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId: string) => {
    // if (cartItems[itemId] > 1) {
    //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // } else {
    //   const updatedCart = { ...cartItems };
    //   delete updatedCart[itemId];
    //   setCartItems(updatedCart);
    // }
  };

  const contextValue = {
    cartItems,
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
