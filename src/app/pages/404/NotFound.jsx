import React from 'react'

import NotFoundImage from '../../../assets/404.png'

export function NotFound() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img src={NotFoundImage} style={{ height: '50%' }} alt={'404 image'} />
            <h1>404: This Page is Lost In Space</h1>
        </div>
    )
}
