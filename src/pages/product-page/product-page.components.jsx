import React from 'react'
import ProductItem from '../../components/product-item/product-item.component';
import ProductData from '../../components/product-list/temp.d';


import './product-page.styles.scss'

class ProductPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            product: [ProductData[props.match.params.productId - 1]]
        }
    }

    render(){
        const products = this.state.product 
        console.log(products)
        return(
            <div className='product-wrapper'>
                <div className='list-product'>
                    {products.map((item) => (
                            <ProductItem
                                key={item.id}
                                item={item}             
                            />
                    ))}
                </div>
            </div>
        )
    }
}



export default ProductPage