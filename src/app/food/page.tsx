import Cards from "@/components/Cards";
import CardItems from "./CardItems";
import InputSearchField from "@/components/InputSearchField";

export const metadata = {
  title: "Foods",
  description: "Explore our delicious menu and learn more about our culinary offerings.",
};

interface Food {
      id: number;
      title: string;
      catId: number;
      foodImg: string;
      price: number;
      category: string;
}

const getFoodData = async (search: string): Promise<Food[]> => {
      const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, {next: { revalidate: 10 }});
      if (!res.ok) {
            throw new Error("Failed to fetch food data");
      }
      const data = await res.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return data.foods as Food[];
};

const Food = async ({searchParams}: {searchParams: {search?: string}}) => {
      const { search = "" } = await searchParams;
      const foodData = await getFoodData(search);

      return (
            <div className="relative">
                  <div className="sticky top-4 z-40 mb-6 flex justify-end">
                        <CardItems />
                  </div>

                  <div className="mb-8 space-y-3 text-center">
                        <h1 className="mb-4 text-3xl font-bold">Food</h1>
                        <p className="text-lg">
                              Welcome to our food page! Here you can explore our delicious menu and learn more about our culinary offerings.
                        </p>
                        <div className="mt-4">
                              <h2 className="text-center text-2xl font-bold">Explore Our Menu</h2>
                              <h3 className="text-center text-lg">Total: {foodData.length} items</h3>
                        </div>
                        <InputSearchField/>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {foodData.map((food) => (
                              <Cards key={food.id} food={food} />
                        ))}
                  </div>
            </div>
      );
};

export default Food;