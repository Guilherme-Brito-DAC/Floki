const express = require('express')
const cors = require('cors')
const usetube = require('usetube')

const app = express()
const port = 4000

app.use(cors())

async function GetCanais(pesquisa) {

  let CanaisOficiais = []

  const canais = await usetube.searchChannel(pesquisa)

  if (canais.channels.length !== 0) {
    canais.channels.map((canal) => canal.official ? CanaisOficiais.push(canal) : '')
  }

  return CanaisOficiais
}

async function GetVideos(pesquisa) {

  let VideosComArtistas = []

  const videos = await usetube.searchVideo(pesquisa)

  if (videos.videos.length !== 0) {
    videos.videos.map((video) => video.artist !== "" ? VideosComArtistas.push(video) : '')
  }

  return VideosComArtistas
}

const GetVideosOfficial = (videos) => {
  const videosOficiais = videos.map(async (video) => {
    let canal = await GetCanais(video.artist)
    return await canal.length !== 0 ? video : null
  })

  return Promise.all(videosOficiais)
}

app.get('/api/pesquisa', async (request, response) => {

  let resultado = []

  let videos = await GetVideos(request.query.pesquisa)
  let canais = await GetCanais(request.query.pesquisa)

  videos = await GetVideosOfficial(videos)
  videos = videos.filter(video => video !== null)

  resultado.push(canais)
  resultado.push(videos)
  response.json(resultado)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
