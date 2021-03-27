import React from 'react'
import { Link } from 'react-router-dom'
import './product-list.styles.scss'

import ProductItem from '../product-item/product-item.component'
import ProductData from '../product-list/temp.d'

class ProductList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            products: ProductData
        }
    }

    render(props){
        return(
            <div className='list-product'>
                {this.state.products.map((product) => (
                    <Link to={`${props.match.url}/${product.path}/${product.id}`}>
                        <ProductItem
                        key={product.id} 
                        title={product.title} 
                        imageUrl={product.imageUrl}
                        price={product.price}                   
                        />
                    </Link>
                ))}
            </div>
        )
    }
}

export default ProductList;