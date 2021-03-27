import React from 'react'

import './collection-item.styles.scss'

const CollectionItem = (props) => (
    <div className='collection-wrapper'>
        <img className='collection-img' alt='collection-item' src={props.imageUrl}></img>
        <h2 className='collection-title'>{props.title}</h2>
    </div>
)

export default CollectionItem