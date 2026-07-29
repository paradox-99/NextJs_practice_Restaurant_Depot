import Link from "next/link";

const highlights = [
  {
    title: "Curated favorites",
    text: "Browse hand-picked dishes and discover what locals love most.",
  },
  {
    title: "Real customer voices",
    text: "Read honest reviews that help you choose your next great meal.",
  },
  {
    title: "Dining made easy",
    text: "Find inspiration fast with a friendly, modern experience built for food lovers.",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-6 py-16 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.25),_transparent_40%)]" />
      <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-12 lg:p-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
            Fresh finds • Trusted reviews
          </span>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Discover the restaurant experience you&apos;ve been craving.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Restaurant Depot brings together delicious food ideas, inspiring stories, and genuine customer feedback in one beautiful place.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/food"
              className="rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Explore Foods
            </Link>
            <Link
              href="/reviews"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Read Reviews
            </Link>
          </div>

          <div className="mt-10 grid w-full gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-left shadow-sm"
              >
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
