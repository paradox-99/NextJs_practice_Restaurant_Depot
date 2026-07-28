'use client';
import { createContext, useState } from "react";

interface Food {
      id: number;
      title: string;
      catId: number;
      foodImg: string;
      price: number;
      category: string;
}

export const CardContext = createContext<{
      cartItems: Food[];
      addToCart: (food: Food) => void;
      removeFromCart: (foodId: number) => void;
}>({
      cartItems: [],
      addToCart: () => {},
      removeFromCart: () => {},
});

const CardProvider = ({ children }: { children: React.ReactNode }) => {

      const [cartItems, setCartItems] = useState<Food[]>([]);

      const addToCart = (food: Food) => {
            // Logic to add food item to cart
            setCartItems((prevItems) => [...prevItems, food]);
      }

      const removeFromCart = (foodId: number) => {
            // Logic to remove food item from cart
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== foodId));
      }

      return (
            <CardContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
                  {children}
            </CardContext.Provider>
      );
};

export default CardProvider;