import { ReviewCardSkeleton } from "@/components/ReviewCard";

export default function Loading() {
      return (
            <div className="mx-auto w-full max-w-7xl">
                  <div className="mb-10 text-center animate-pulse">
                        <div className="mx-auto h-4 w-40 rounded-full bg-gray-200" />
                        <div className="mx-auto mt-3 h-12 w-72 rounded bg-gray-200" />
                        <div className="mx-auto mt-4 h-5 w-full max-w-2xl rounded bg-gray-200" />
                        <div className="mx-auto mt-5 h-6 w-40 rounded-full bg-gray-200" />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                              <ReviewCardSkeleton key={index} />
                        ))}
                  </div>
            </div>
      );
}