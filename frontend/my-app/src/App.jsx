import React, { useState } from 'react'
import Pesquisa from './pesquisa/pesquisa.jsx'
import Videos from './videos/videos.jsx'
import Player from './player/player.jsx'
import Social from './social/social.jsx'
import Canais from './canais/canais.jsx'

import './App.css'

function App() {

  const [Res_Pesquisa, setPesquisa] = useState(null)
  const [CanalSelected, setCanalSelected] = useState(null)
  const [VideoPlay, setVideoPlay] = useState(null)

  return (
    <>
      <div className='main'>
        <div className='esquerda'>
          <Pesquisa onChange={setPesquisa} />
          <div className='meio'>
            <Canais canais={Res_Pesquisa !== null ? Res_Pesquisa[0] : Res_Pesquisa} onChange={setCanalSelected} />
            <Videos videos={Res_Pesquisa !== null ? Res_Pesquisa[1] : Res_Pesquisa} onChange={setVideoPlay} />
          </div>
        </div>
        <div className='direita'>
          <Social />
        </div>
      </div>
      <Player video={VideoPlay} />
    </>
  );
}

export default App;
