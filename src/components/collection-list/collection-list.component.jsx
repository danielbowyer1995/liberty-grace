import React from 'react'
import { Link } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component'

import { CollectionData } from './temp.d'
import './collection-list.styles.scss'

class CollectionList extends React.Component {
    constructor(){
        super();

        this.state = {
            collections: CollectionData
        }
    }

    render(){
        return(
            <div>
                {this.state.collections.map((collection => (
                    <Link to={`/shop/${collection.path}`}>
                        <CollectionItem 
                            key={collection.id}
                            imageUrl={collection.imageUrl}
                            title={collection.title}
                        />
                    </Link>
                )))}
            </div>
        )
    }
}

export default CollectionList