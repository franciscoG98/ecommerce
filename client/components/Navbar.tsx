import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "@/services/fakeStoreApi";

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
    <nav className="w-screen bg-gray-900 p-4 -mt-5">
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
            <Link href="/cart">
              <span className="text-white hover:text-gray-300">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
