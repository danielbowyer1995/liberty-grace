import { observable } from 'mobx'

const productStore = observable({
    currentProduct: [{}]
})
    

export default productStore