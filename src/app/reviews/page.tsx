import ReviewCard from "@/components/ReviewCard";

export const metadata = {
  title: {
      absolute: "Reviews",
  },
  description: "Read honest reviews that help you choose your next great meal.",
};

type Review = {
      id: number;
      user: string;
      email: string;
      photo: string;
      rating: number;
      review: string;
      likes: string[];
      date: string;
};

const getReviews = async (): Promise<Review[]> => {
      const response = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews", {
            cache: "no-store",
      });

      if (!response.ok) {
            throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      return data.reviews as Review[];
};

export default async function Reviews() {
      const reviews = await getReviews();

      return (
            <div className="mx-auto w-full max-w-7xl">
                  <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
                              Customer Stories
                        </p>
                        <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
                              Reviews
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                              Real feedback from guests about meals, service, and the dining
                              experience.
                        </p>
                        <h2 className="mt-5 text-lg font-semibold text-gray-700">
                              Total: {reviews.length} reviews
                        </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {reviews.map((review) => (
                              <ReviewCard key={review.id} review={review} />
                        ))}
                  </div>
            </div>
      );
}