import React from 'react'
import { Link } from 'react-router-dom'

const ProductsItem = ({
    id,
    title,
    price,
    image,
    category,
    cantidad
}) => {
  return (
    <div className="product">
        <Link to={`/products/${id}`}>
        <div className="productImage">
            <img src={image} alt={title} className="imgProduct"/>
        </div>
        </Link>
        <div className='footerProduct'>
            <h1>{title}</h1>
            <p>{category}</p>
            <p className='price'>${price}</p>
        </div>
        <div className="buttom">
            <button className='btn'>
                Anadir al carrito
            </button>
            <div>
                <Link to={`/products/${id}`} className='btn'>Detalle</Link>
            </div>
        </div>
        </div>
  )
}

export default ProductsItem