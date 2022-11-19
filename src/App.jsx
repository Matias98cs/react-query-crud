import React from 'react'
import ProductForm from './componentes/ProductForm'
import Products from './componentes/Products'

const App = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <ProductForm/>
      <div className='grid grid-cols-2 gap-5'>
        <Products/>
      </div>
    </div>
  )
}

export default App
