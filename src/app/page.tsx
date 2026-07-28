import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-[70vh]">
      <h1 className="text-4xl font-bold mb-4">Welcome to Restaurant Depot</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your one-stop destination for all your restaurant needs.
      </p>
      <div className="flex space-x-4">
        <Link href="/food" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" >
          Explore Food
        </Link>
        <Link href="/Reviews" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition" >
          Read Reviews
        </Link>
      </div>
    </div>
  );
}
