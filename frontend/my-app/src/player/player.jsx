import React from 'react'
import './player.css'

function Player({ video }) {



    if (video !== null) {
        return (
            <div className='player'>
                <div>
                    <h3> {video.title} </h3>
                    <p> {video.artist} </p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='player'>

            </div>
        )
    }
}
export default Player
