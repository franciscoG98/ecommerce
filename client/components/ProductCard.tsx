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
    <div className="flex flex-col justify-center w-48 border rounded border-white mx-auto">
      <img src={product.image} alt={product.title} className="card-image" />
      <h3 className="card-title">{product.title}</h3>
      <p className="">${product.price}</p>
    </div>
  );
};

export default Card;
