export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
};

export interface CartContextType {
    products: Product[];
    removeProduct: (productId: number) => void;
    addProduct: (product: Product) => void;
    quantity: number;
    total: number;
};
