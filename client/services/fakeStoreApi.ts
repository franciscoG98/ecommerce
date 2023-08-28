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
