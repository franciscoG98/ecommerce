import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "@/services/fakeStoreApi";
import { PiShoppingCartFill } from "react-icons/pi"
// import { Product } from "@/types";

// interface Props {
//   cartCount: number;
// }

// const Navbar: React.FC<Props> = ({ cartCount }) => {
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
    <nav className="w-screen bg-black p-6 border border-white  flex justify-between items-center">
      <Link href="/">
        <span className="text-white text-xl font-semibold">
          My Ecommerce
        </span>
      </Link>
      <ul className="flex space-x-4 mr-8">

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
              {/* {cartCount} */}
              0
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
