import React, { Component } from 'react'
import ProductList from '../../components/product-list/product-list.component'

import ProductData from '../../components/product-list/temp.d'


class DesignerFrames extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: ProductData
        }
    }

    render(){
        const products = this.state
        // console.log(products)
        return(
            <div>
                <div className='header-block'>
                    <h1>Designer Frames</h1>
                </div>
                <ProductList
                    products={products}
                />
            </div>
        )
    }
}

export default DesignerFrames