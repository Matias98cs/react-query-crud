import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from '../api/productsAPI'

const ProductForm = () => {

    const queryClient = useQueryClient()

    const addProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            console.log('Producto added')
            queryClient.invalidateQueries('products')
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        const formDate = new FormData(e.target)
        const product = Object.fromEntries(formDate)
        addProductMutation.mutate({
            ...product,
            inStock: true,
        })
    }


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id='name'  name='name'/>

        <label htmlFor="description">Description</label>
        <input type="text" id='description' name='description' />

        <label htmlFor="price">Price</label>
        <input type="number" id='price' name='price' />

        <button>Add Product</button>
    </form>
  )
}

export default ProductForm