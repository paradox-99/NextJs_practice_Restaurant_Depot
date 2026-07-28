type SkeletonsProps = {
      count?: number;
};

const Skeletons = ({ count = 8 }: SkeletonsProps) => {
      return (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: count }).map((_, index) => (
                        <div
                              key={index}
                              className="animate-pulse rounded-lg bg-white p-4 shadow-md"
                        >
                              <div className="flex justify-center">
                                    <div className="h-48 w-full max-w-64 rounded-lg bg-gray-200" />
                              </div>

                              <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />
                              <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
                              <div className="mt-3 h-4 w-1/3 rounded bg-gray-200" />

                              <div className="mt-4 flex justify-between gap-3">
                                    <div className="h-10 flex-1 rounded bg-gray-200" />
                                    <div className="h-10 flex-1 rounded bg-gray-200" />
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default Skeletons;