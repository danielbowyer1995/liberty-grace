import React from 'react'
import { connect } from 'react-redux'

import './product-item.styles.scss'
import { addItem } from '../../redux/cart/cart.actions'
// import productStore from '../../stores/product.store'

const ProductItem = ({item, addItem}) => {
    const { title, price, imageUrl, description } = item
    return(
    <div className='product-item'>
        <img className='image' 
        alt='product' 
        src={imageUrl}
        />
        <div>
            <span className='title'>{title.toUpperCase()}</span>
            <p className='price'>£{price}</p>
            <span className='description'>{description}</span>
        </div>
        <button onClick={() => addItem(item)}>Add To Cart</button>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductItem)