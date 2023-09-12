import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type Rating = {
    rate: number;
}

type Props ={
    id: string;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;

    rating: Rating;

    // rate: number
}

const ProductDetail: React.FC<Props> = ({title, price, image, category, description, rating}) => {

    return (
        <main className="bg-black w-7/12 mx-auto flex flex-col mt-7 mb-20 p-6 border rounded">
            <div className="flex flex-row w-full mb-5">
                {/* image */}
                <div className="w-7/12">
                    <img src={image} alt={description} />
                </div>
                {/* title category and price*/}
                <div className="h-96 w-5/12 my-auto text-white p-3 grid ">
                    <h2 className="text-2xl">{title}</h2>
                    {/* aca esta mierda no anda ni idea porque */}
                    {/* {
                        new Array(Math.round(rating['rate'])).fill(null).map(() => (
                            <AiFillStar />
                        ))
                    } */}
                    <p className='whitespace-nowrap capitalize mt-4'>Category: <b>{category}</b></p>
                    <p className="mt-4">${price}</p>
                    <button className="border-black w-28 h-12 mt-36 mx-auto rounded bg-green-600 p-2 hover:bg-green-500 duration-100 font-semibold">Buy</button>
                </div>
            </div>
            {/* description */}
            <p className='border-t-2 border-white text-white p-3'>{description}</p>
        </main>
    );
};

export default ProductDetail;
