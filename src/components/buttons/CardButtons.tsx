'use client';
import { CardContext } from '@/context/CardProvider';
import { useContext, useState } from 'react';

interface Food {
      id: number;
      title: string;
      catId: number;
      foodImg: string;
      price: number;
      category: string;
}

const CardButtons = ({ food }: { food: Food }) => {

      const { addToCart, removeFromCart } = useContext(CardContext);
      const [inCart, setInCart] = useState(false);

      const handleAddToCart = () => {
            addToCart(food); // Assuming 'food' is available in the scope
            setInCart(true);
      };

      const handleRemoveFromCart = () => {
            removeFromCart(food.id); // Assuming 'food' is available in the scope
            setInCart(false);
      };

      if (inCart) {
            return (
                  <div>
                        <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
                              onClick={handleRemoveFromCart}
                        >
                              Remove
                        </button>
                  </div>
            );
      }

      return (
            <div>
                  <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer">
                        Add to Cart
                  </button>
            </div>
      );
};

export default CardButtons;