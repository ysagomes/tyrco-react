import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Menu from '../Menu/Menu'

const Landing = () => {
  return (
    <>
        <Menu />

        <ItemListContainer gretting="Bienvenidos a mi tienda"/>
    </>
  )
}

export default Landing