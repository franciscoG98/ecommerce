import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type Props ={
    id: string;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: object;
}

const ProductDetail: React.FC<Props> = ({id, title, price, image, category, description, rating}) => {
    
    return (
        <main className="bg-black w-96 m-auto h-96 relative flex row">
            <div className="w-7/12 m-auto bg-red-700 border border-white">
                <img src={image} alt={description} className="" />
            </div>
            <div className="w-5/12 bg-green-600 my-auto border border-white text-white p-3">
                <h2 className="text-2xl">{title}</h2>
                <p>estrellas: {rating.rate}</p>
                {console.log(rating)}
                <p className="text-lg">$ {price}</p>
                <p>Category: <b>{category}</b></p>
                <p>Description: {description}</p>
            </div>
        </main>
    );
};

export default ProductDetail;
