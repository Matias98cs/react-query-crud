// fetch
// axios 
import axios from 'axios'

const productsApi = axios.create({
    baseURL: 'http://localhost:3000/products'
})

export const getProducts =  async () => {
    const res = await productsApi.get('/')
    return res.data
}

export const createProduct = async(product) => productsApi.post('/', product)


