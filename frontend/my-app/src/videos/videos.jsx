import React from 'react'
import { Button } from '@material-ui/core'
import './videos.css'

function Videos({ videos, onChange }) {

    if (videos === null || videos.length === 0) return (
        <div className='mid'>
            <p>{videos === null ? 'Nenhuma pesquisa' : 'Nenhuma música encontrada'}</p>
        </div>
    )

    return (
        <>
            <h1>Músicas</h1>
            {videos.map((video, i) => {
                if (video.artist !== '') {
                    return (
                        <div key={i} className='video'>
                            <div>
                                <p>{video.artist}</p>
                                <h3>{video.title}</h3>
                                <p><i>{video.duration / 100 + ' min'}</i></p>
                            </div>
                            <div>
                                <Button onClick={() => onChange(video)}><img src='https://img.icons8.com/material-rounded/24/ffffff/play--v1.png' alt='' /></Button>
                            </div>
                        </div>
                    )
                }
                else {
                    return ''
                }
            })}
        </>
    )
}

export default Videos
