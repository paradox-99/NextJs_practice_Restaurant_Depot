"use client";
import { usePathname } from 'next/navigation';

const Footer = () => {

      const pathName = usePathname();
      if (pathName.startsWith("/dashboard")) {
            return null;
      }

      return (
            <div>
                  <footer className="bg-gray-900 text-white p-4 text-center">
                        &copy; 2024 Restaurant Depot. All rights reserved.
                  </footer>
            </div>
      );
};

export default Footer;