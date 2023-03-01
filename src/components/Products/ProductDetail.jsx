import React, {useContext, useState, useEffect} from 'react'
import './ProductDetail.css'
import { DataContext } from "../../context/Dataprovider"
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const value= useContext(DataContext)
    const [products]= value.products
    const [detalle, setDetalle] = useState ([])
    const params= useParams()

    useEffect(() => {
        products.forEach (product =>{
            console.log (products.id, params.id)
            if (product.id === parseInt(params.id)){
                setDetalle (product)
            }
        })
    }, [params.id, products])
    
  return (
    <>
    <div className='detalles'>
        <h2>{detalle.title}</h2>
        <p className='price'>${detalle.price}</p>
        <div className='grid'>
            <div className='size'>
                <select name="Tamaño">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p>Tamaño</p>
            </div>
        </div>
        <button>Añadir al carrito</button>
        <img src={detalle.image} alt={detalle.title} />
        <div className='description'>
            <p><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem dolorum quos distinctio veniam id labore mollitia aperiam? Perferendis, sunt debitis quo sed earum rem.</p>
        </div>
    </div>
    </>
  )
}

export default ProductDetail