import Image from "next/image";

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

type ReviewCardProps = {
      review: Review;
};

const extractUrl = (value: string): string => {
      const markdownLinkMatch = value.match(/\((https?:\/\/[^)]+)\)$/);
      if (markdownLinkMatch?.[1]) {
            return markdownLinkMatch[1];
      }

      return value;
};

const formatDate = (value: string): string => {
      const date = new Date(value);

      if (Number.isNaN(date.getTime())) {
            return value;
      }

      return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
      }).format(date);
};

const ReviewCard = ({ review }: ReviewCardProps) => {
      const photoUrl = extractUrl(review.photo);

      return (
            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />

                  <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-4 ring-amber-50">
                              <Image
                                    src={photoUrl}
                                    alt={review.user}
                                    fill
                                    className="object-cover"
                              />
                        </div>

                        <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                          <h3 className="text-lg font-semibold text-gray-900">
                                                {review.user}
                                          </h3>
                                          <p className="text-sm text-gray-500">{review.email}</p>
                                    </div>

                                    <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                                          <span>★</span>
                                          <span>{review.rating.toFixed(1)}</span>
                                    </div>
                              </div>

                              <p className="mt-2 text-sm text-gray-500">{formatDate(review.date)}</p>
                        </div>
                  </div>

                  <p className="mt-5 text-[15px] leading-8 text-gray-700">
                        {review.review}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span className="inline-flex h-9 items-center rounded-full bg-gray-100 px-4 font-medium text-gray-700">
                                    {review.likes.length} likes
                              </span>
                              {review.likes.length > 0 ? (
                                    <span className="hidden text-gray-400 sm:inline">
                                          Liked by {review.likes.slice(0, 2).join(", ")}
                                          {review.likes.length > 2 ? "..." : ""}
                                    </span>
                              ) : null}
                        </div>

                        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                              Verified guest
                        </span>
                  </div>
            </article>
      );
};

export const ReviewCardSkeleton = () => {
      return (
            <div className="animate-pulse rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="h-1 w-full rounded-full bg-gray-200" />

                  <div className="mt-5 flex items-start gap-4">
                        <div className="h-16 w-16 rounded-2xl bg-gray-200" />

                        <div className="flex-1 space-y-3">
                              <div className="flex items-center justify-between gap-4">
                                    <div className="space-y-2">
                                          <div className="h-5 w-32 rounded bg-gray-200" />
                                          <div className="h-4 w-40 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-8 w-16 rounded-full bg-gray-200" />
                              </div>
                              <div className="h-4 w-24 rounded bg-gray-200" />
                        </div>
                  </div>

                  <div className="mt-5 space-y-3">
                        <div className="h-4 w-full rounded bg-gray-200" />
                        <div className="h-4 w-11/12 rounded bg-gray-200" />
                        <div className="h-4 w-4/5 rounded bg-gray-200" />
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="h-9 w-32 rounded-full bg-gray-200" />
                        <div className="h-9 w-28 rounded-full bg-gray-200" />
                  </div>
            </div>
      );
};

export default ReviewCard;