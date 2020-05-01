const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/stats', (request, response) => {
  return response.render('getStats')
})

app.get('/statsByPlayer', (request, response) => {
  return response.render('getStatsByPlayer')
})

app.get('/postStats', (request, response) => {
  return response.render('postStats')
})

app.get('/deleteStatsByPlayer', (request, response) => {
  return response.render('deleteStatsByPlayer')
})

app.all('*'), (request, response) => {
  return response.sendStatus(404)
}

app.listen(1111, () => {
  console.log('Listening on port 1111...') //eslint-disable-line no-console
})
