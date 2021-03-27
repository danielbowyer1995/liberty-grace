import React from 'react'

import './product-item.styles.scss'
// import productStore from '../../stores/product.store'

const ProductItem = (props) => {
    return(
    <div className='product-item'>
        <img className='image' 
        alt='product' 
        src={props.imageUrl}
        />
        <div>
            <span>{props.title.toUpperCase()}</span>
            <p className='price'>£{props.price}</p>
        </div>
    </div>
    )
}

export default ProductItem