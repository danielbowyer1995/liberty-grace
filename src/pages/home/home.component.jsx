import React from 'react'

import './home.styles.scss'

import InstaPost from '../../components/instagram-feed/instagram-feed.component'

const Home = () => (
    <div>
        <div className='header-block'>
            <h1>Welcome to the home for home lovers.</h1>
        </div>
        <div>
            <h2 className='insta-header'>Instagram Feed</h2>
        </div>
        <InstaPost />
    </div>
)

export default Home