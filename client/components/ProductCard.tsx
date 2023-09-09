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
    <div className="flex flex-col justify-start h-96 w-48 border rounded border-white mx-auto">
      <Link className="h-3/6 flex items-center justify-center bg-white" href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="max-h-40" />
      </Link>
      <hr />
      <div className="h-3/6 grid content-between p-2">
        <h3 className="text-sm">{product.title}</h3>
        {/* price and buy buttons */}
        <div className="relative flex row justify-between mt-5">
          <p>${product.price}</p>
          <div>
            <button className="rounded bg-gray-300 text-black w-4 font-bold hover:bg-gray-200">-</button>
            <span className="px-1">0</span>
            <button className="rounded bg-gray-300 text-black w-4 font-bold hover:bg-gray-200">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
