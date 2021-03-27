import React from 'react'

import InstaCard from '../instagram-card/instagram-card.component'

import { instagramData, accessToken } from './temp.d'
import './instagram-feed.styles.scss'

class InstaPost extends React.Component {

    constructor(){
        super();

        this.state = {
            posts : instagramData,
            token: accessToken
        }
    }

    render(){
        return(
            <div className='list'>
                {this.state.posts.map((post) => (
                    <InstaCard 
                        key={post.id} 
                        url={post.url} 
                        token={this.state.token}
                    />
                ))}
            </div>
        )
    }
}

export default InstaPost