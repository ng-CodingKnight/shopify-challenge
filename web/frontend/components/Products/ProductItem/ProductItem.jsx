import React from 'react'
import ProductImage from '../ProductImage/ProductImage'
import { Text, Card } from '@shopify/polaris'

const ProductItem = ({title = "NEW ARRIVAL", productName, productDescription, price, imageUrl, vendor}) => {
  return (
    <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', width: '250px', height: '400px', background: '#fff'}}>
        <ProductImage 
            url={imageUrl?.src}
            alt={imageUrl?.alt}
        />
        <Text  variant='headingxl' as='h4'>
            {title}
        </Text>
        <Text as='p' fontWeight='bold'>
            {productName}
        </Text>
        <div style={{ flexGrow: '1'}}>
            <Text as='p' fontWeight='medium' >
                ${price}
            </Text>
        </div>  
        <Text as='p' fontWeight='regular' >
                by {vendor}
        </Text>
    </div>
  )
}

export default ProductItem