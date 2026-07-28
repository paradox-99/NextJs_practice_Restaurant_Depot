import Image from "next/image";
import Link from "next/link";
import CardButtons from "./buttons/CardButtons";

interface Food {
      id: number;
      title: string;
      catId: number;
      foodImg: string;
      price: number;
      category: string;
}

type CardsProps = {
      food: Food;
};

const Cards = ({ food }: CardsProps) => {

      return (
            <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex justify-center">
                        <Image src={food.foodImg} alt={food.title} width={330} height={192} className="rounded-lg" />
                  </div>
                  <h2 className="text-xl font-semibold mt-2">{food.title}</h2>
                  <p className="text-gray-600">Category: {food.category}</p>
                  <p className="text-gray-800 font-bold mt-2">{food.price.toFixed(2)} ৳</p>
                  <div className="flex justify-between items-center mt-4">

                        <CardButtons food={food} />
                        <Link
                              href={`/food/${food.id}`}
                              className="inline-flex items-center justify-center rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
                        >
                              View Details
                        </Link>
                  </div>
            </div>
      );
};

export default Cards;