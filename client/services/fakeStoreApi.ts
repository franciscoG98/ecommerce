const BASE_URL = 'https://fakestoreapi.com'

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`)
    const products = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`)
    const categories = await response.json()
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

// interface CategoryProduct {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

export async function getProductFromCategory({ category }: { category:string }) {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`)
    const categories = await response.json()
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}
