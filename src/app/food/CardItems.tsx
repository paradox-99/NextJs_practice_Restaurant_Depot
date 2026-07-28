'use client';

import { CardContext } from '@/context/CardProvider';
import { useContext, useState } from 'react';

// interface Food {
//   id: number;
//   title: string;
//   catId: number;
//   foodImg: string;
//   price: number;
//   category: string;
// }

const CardItems = () => {

      const { cartItems } = useContext(CardContext);
      const [isCartOpen, setIsCartOpen] = useState(false);

      return (
            <div>
                  <button
                        type="button"
                        onClick={() => setIsCartOpen((prev) => !prev)}
                        className={`${isCartOpen ? "hidden" : "block"} flex items-center gap-3 rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-700 hover:cursor-pointer`}
                  >
                        <span className="text-lg">🛒</span>
                        <span>{cartItems.length} item{cartItems.length === 1 ? "" : "s"}</span>
                  </button>

                  {isCartOpen && (
                        <div className="sticky top-20 z-30 mb-6 rounded-3xl border border-amber-200 bg-white p-4 shadow-xl">
                              <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">Cart</h3>
                                    <button
                                          type="button"
                                          onClick={() => setIsCartOpen(false)}
                                          className="text-sm font-medium text-amber-700 hover:cursor-pointer"
                                    >
                                          Close
                                    </button>
                              </div>

                              {cartItems.length === 0 ? (
                                    <p className="mt-3 text-sm text-gray-600">No items added yet.</p>
                              ) : (
                                    <ul className="mt-4 space-y-3 max-h-80 overflow-y-auto">
                                          {cartItems.map((item) => (
                                                <li
                                                      key={item.id}
                                                      className="w-56 flex items-center justify-between rounded-2xl bg-amber-50 px-3 py-2"
                                                >
                                                      <span className="text-sm font-medium text-gray-800">{item.title}</span>
                                                      <span className="text-sm font-semibold text-amber-700">{item.price.toFixed(2)} ৳</span>
                                                </li>
                                          ))}
                                    </ul>
                              )}
                        </div>
                  )}
            </div>
      );
};

export default CardItems;