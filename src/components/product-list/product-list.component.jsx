import React from 'react'
import { Link } from 'react-router-dom'
import './product-list.styles.scss'

import ProductItem from '../product-item/product-item.component'

const ProductList = (props) => {
        const {products} = props.products
        return(
            <div className='list-product'>
                {products.map((item) => (
                    <Link key={item.id} to={`${item.path}/${item.id}`}>
                        <ProductItem
                            key={item.id}
                            item={item}           
                        />
                    </Link>
                ))}
            </div>
        )
}

export default ProductList;