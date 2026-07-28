import Image from "next/image";
import { notFound } from "next/navigation";

type Food = {
      id: number;
      title: string;
      catId: number;
      foodImg: string;
      price: number;
      video: string;
      category: string;
      area: string;
};

type FoodDetailsProps = {
      params: Promise<{ id: string }>;
};

const getFoodDetails = async (id: string): Promise<Food | null> => {
      const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);

      
      
      if (!res.ok) {
            return null;
      }
      
      const data = await res.json();
      return data.details as Food;
};

const extractUrl = (value: string): string => {
      const markdownLinkMatch = value.match(/\((https?:\/\/[^)]+)\)$/);
      if (markdownLinkMatch?.[1]) {
            return markdownLinkMatch[1];
      }
      return value;
};

export default async function FoodDetails({ params }: FoodDetailsProps) {
      const { id } = await params;
      const food = await getFoodDetails(id);

      if (!food) {
            notFound();
      }

      const imageUrl = extractUrl(food.foodImg);
      const videoUrl = extractUrl(food.video);

      return (
            <div className="mx-auto max-w-4xl">
                  <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-200">
                        <div className="grid gap-0 md:grid-cols-2">
                              <div className="flex items-center justify-center bg-gray-50 p-6 sm:p-8">
                                    <Image
                                          src={imageUrl}
                                          alt={food.title}
                                          width={600}
                                          height={400}
                                          className="h-auto w-full max-w-md rounded-2xl object-cover shadow-md"
                                    />
                              </div>

                              <div className="p-6 sm:p-8 lg:p-10">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                                          Food Details
                                    </p>
                                    <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                                          {food.title}
                                    </h1>

                                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                                          <span className="rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700">
                                                Category: {food.category}
                                          </span>
                                          <span className="rounded-full bg-amber-50 px-4 py-2 font-medium text-amber-700">
                                                Area: {food.area}
                                          </span>
                                          <span className="rounded-full bg-green-50 px-4 py-2 font-semibold text-green-700">
                                                {food.price.toFixed(2)} ৳
                                          </span>
                                    </div>

                                    <div className="mt-8 space-y-4 text-gray-600">
                                          <p>
                                                Explore this dish with a closer look at the image,
                                                price, and category. This details page is designed to
                                                mirror the card layout while giving room for future
                                                item-specific content.
                                          </p>

                                          <p>
                                                Item ID: <span className="font-semibold text-gray-900">{food.id}</span>
                                          </p>

                                          <p>
                                                Category ID: <span className="font-semibold text-gray-900">{food.catId}</span>
                                          </p>

                                          <p>
                                                Video: <a href={videoUrl} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 underline">Watch on YouTube</a>
                                          </p>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                          <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                                                Add to Cart
                                          </button>
                                          <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
                                                Favorite
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}