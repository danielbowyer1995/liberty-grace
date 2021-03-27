import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

import './instagram-card.styles.scss'

const InstaCard = (props) => (
    <div className='card'>
        <InstagramEmbed className='post'
            url={props.url}
            clientAccessToken={props.token}
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    </div>
)

export default InstaCard