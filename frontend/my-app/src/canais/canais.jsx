import React from 'react'
import './canais.css'

function Canais({ canais, onChange }) {

    if (canais === null || canais.length == 0) return ''

    return (
        <>
            <h1>Artistas Oficiais</h1>
            <div style={{ display: 'flex' }}>
                {
                    canais.map((canal,i) => {
                        return (
                            <div className='Canais' key={i}>
                                <img className='ChannelImg' src={canal.channel_avatar_large} alt='' />
                                <h1>{canal.name}</h1>
                                <p>Official</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Canais
