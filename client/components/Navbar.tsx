import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "@/services/fakeStoreApi";
import { PiShoppingCartFill } from "react-icons/pi"

const Navbar: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchAndSetCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }

    fetchAndSetCategories();
  }, []);

  return (
    <nav className="w-screen bg-black p-4 -mt-5 border border-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-white text-xl font-semibold">
              My Ecommerce
            </span>
          </Link>
        </div>
        <ul className="flex space-x-4">

          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link href={`/${cat}`}>
                <span className="text-white hover:text-gray-300 capitalize">
                  {cat}
                </span>
              </Link>
            </li>
          ))}

          <li>
            <Link href="/cart" className="relative">
              <PiShoppingCartFill className='text-white' size={30} />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                2
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
