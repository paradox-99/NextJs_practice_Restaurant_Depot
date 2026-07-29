"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Path {
      name: string;
      href: string;
}

const Header = () => {

      const pathName = usePathname();
      if (pathName.startsWith("/dashboard")) {
            return null;
      }

      const paths: Path[] = [
            { name: "Home", href: "/" },
            { name: "Foods", href: "/food" },
            { name: "Reviews", href: "/reviews" }
      ];

      return (
            <div className=" p-4 flex justify-between items-center w-full shadow-md bg-white">
                  <div className="flex items-center">
                        <Image src="/logo.png" alt="Logo" width={80} height={80} className='ml-10' />
                        <h1 className="text-2xl font-bold text-gray-800 inline-block ml-2">Restaurant Depot</h1>
                  </div>
                  <nav>
                        <ul className="flex space-x-4">
                              {paths.map((path) => (
                                    <li key={path.href}>
                                          <Link href={path.href} className="px-4 py-3 font-semibold hover:bg-gray-200 rounded-lg text-black hover:text-gray-700"> {path.name}</Link>
                                    </li>
                              ))}
                        </ul>
                  </nav>
            </div>
      );
};

export default Header;