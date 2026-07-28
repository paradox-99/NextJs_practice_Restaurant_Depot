export default function Loading() {
      return (
            <div className="mx-auto max-w-4xl animate-pulse">
                  <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-200">
                        <div className="grid gap-0 md:grid-cols-2">
                              <div className="flex items-center justify-center bg-gray-50 p-6 sm:p-8">
                                    <div className="h-72 w-full max-w-md rounded-2xl bg-gray-200" />
                              </div>

                              <div className="p-6 sm:p-8 lg:p-10">
                                    <div className="h-4 w-36 rounded bg-gray-200" />
                                    <div className="mt-4 h-10 w-3/4 rounded bg-gray-200" />

                                    <div className="mt-6 flex flex-wrap gap-3">
                                          <div className="h-10 w-40 rounded-full bg-gray-200" />
                                          <div className="h-10 w-28 rounded-full bg-gray-200" />
                                    </div>

                                    <div className="mt-8 space-y-4">
                                          <div className="h-4 w-full rounded bg-gray-200" />
                                          <div className="h-4 w-5/6 rounded bg-gray-200" />
                                          <div className="h-4 w-2/3 rounded bg-gray-200" />
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                          <div className="h-12 w-36 rounded-full bg-gray-200" />
                                          <div className="h-12 w-32 rounded-full bg-gray-200" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}