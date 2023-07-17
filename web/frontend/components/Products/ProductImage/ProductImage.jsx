import React from 'react'
import { Card } from '@shopify/polaris'

const ProductImage = ({ url, alt }) => {
  return (
    <div style={{ marginBottom : '1rem'}}>
        <img src={url} alt={alt} width={225} height={250}/>
    </div>
  )
}

export default ProductImage