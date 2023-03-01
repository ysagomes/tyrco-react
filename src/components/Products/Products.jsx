import React, { useContext } from 'react'
import './Products.css'
import {DataContext} from '../../context/Dataprovider'
import ProductsItem from './ProductsItem'


const Products = () => {

    const value = useContext (DataContext)
    const [products] = value.products

  return (
    <>
    <h1 className='title'>Productos</h1>
    <div className='products'>
      {
        products.map(product =>(
          <ProductsItem 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            cantidad={product.cantidad}
            />
        ))
      }
    
    </div>
    </>
  )
}

export default Products