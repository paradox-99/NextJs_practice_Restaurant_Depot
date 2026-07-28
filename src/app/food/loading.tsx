import Skeletons from "@/components/Skeletons";

export default function Loading() {
      return (
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans px-4 py-8">
                  <div className="w-full max-w-7xl">
                        <div className="mb-8 space-y-3 text-center">
                              <div className="mx-auto h-10 w-40 rounded bg-gray-200" />
                              <div className="mx-auto h-6 w-3/4 max-w-3xl rounded bg-gray-200" />
                              <div className="mx-auto h-5 w-48 rounded bg-gray-200" />
                        </div>

                        <Skeletons />
                  </div>
            </div>
      );
}