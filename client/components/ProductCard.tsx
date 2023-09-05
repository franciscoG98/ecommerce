import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="flex flex-col justify-center w-48 h-80 border rounded border-white mx-auto">
      <Link href={`/${product.id}`}>
        <img src={product.image} alt={product.title} className="mx-auto h-40 min-w-full mt-5" />
      </Link>
      <h3 className="card-title">{product.title}</h3>
      <div className="relative flex row justify-between mt-5">
        <p>${product.price}</p>
        <div>
          <button className="rounded bg-gray-300 text-black w-4 font-bold hover:bg-gray-200">-</button>
          <span className="px-1">0</span>
          <button className="rounded bg-gray-300 text-black w-4 font-bold hover:bg-gray-200">+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
