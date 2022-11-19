import React, { useEffect } from 'react'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { getProducts, deleteProduct, updateProduct } from '../api/productsAPI'

const Products = () => {

    const queryClient = useQueryClient()
    const {isLoading, data: producst, isError, error} = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        select: data => data.sort((a,b) => b.id - a.id)
    })

    const deleteProductMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries('products')
        }
    })

    const updateProductMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries('products')
        }
    })


    if(isLoading) return <div>Loading...</div>
    else if(isError) return <div>Error: {error.message}</div>




  return producst.map( product => (
    <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => {
             deleteProductMutation.mutate(product.id)
        }}>
            Delete
        </button>
        <input 
            checked={product.inStock} 
            type="checkbox"
            id={product.id}
            onChange={ e => {updateProductMutation.mutate({...product, inStock: e.target.checked})}} />
        <label htmlFor={product.id}>In Stock</label>
    </div>
  ))
}

export default Products
