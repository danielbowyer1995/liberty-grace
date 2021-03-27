import React from 'react'
import ProductData from '../../components/product-list/temp.d';

import './product-page.styles.scss'

class ProductPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            product: ProductData[props.match.params.productId]
        }
    }

    render(props){
        return(
            <div className='product-wrapper'>
                <div className='product-right'>
                    <img className='product-image' alt='product' src={this.state.product.imageUrl} />
                </div>
                <div className='product-left-box'>
                    <h2>{this.state.product.title}</h2>
                    <span>{this.state.product.price}</span>
                    <p>{this.state.product.description}</p>
                </div>
            </div>
        )
    }
}

export default ProductPage