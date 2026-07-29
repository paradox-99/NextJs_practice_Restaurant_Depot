import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardProvider from "@/context/CardProvider";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Restaurant Depot",
    template: "%s | Restaurant Depot",
  },
  description: "Best Restaurant Finder and Review Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col " suppressHydrationWarning>
        <Header />
        <main className="grow mx-auto w-full max-w-7xl px-4 py-8 ">
          <CardProvider>
            {children}
          </CardProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
