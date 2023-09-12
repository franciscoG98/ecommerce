import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  product: Product;
  handleRemoveProduct: (arg0: number) => void;
  handleAddProduct: (arg0: Product) => void;
  cartCount: number;
  // onClick: (productId: number) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const Card: React.FC<CardProps> = ({ product, cartCount, handleRemoveProduct, handleAddProduct }) => {

  // these handle click are because if they weren't appears a SyntheticBaseEvent why? idk, we care? no bc it works
  const handleClick1 = () => {
    handleAddProduct(product)
  }

  const handleClick2 = () => {
    handleRemoveProduct(product.id)
  }

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
            <button className="rounded bg-gray-300 text-black w-6 font-bold hover:bg-gray-200" onClick={handleClick2}>-</button>
            <span className="px-1">{cartCount}</span>
            <button className="rounded bg-gray-300 text-black w-6 font-bold hover:bg-gray-200" onClick={handleClick1}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
