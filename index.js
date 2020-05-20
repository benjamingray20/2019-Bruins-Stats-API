const express = require('express')
const { getAllTeams, getTeamsWithPlayers } = require('./controllers/teams')
const { getAllPlayers, getPlayerByLastName } = require('./controllers/players')


const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/teams', getAllTeams)

app.get('/:team', getTeamsWithPlayers)

app.get('/players', getAllPlayers)

app.get('/players/:lastName', getPlayerByLastName)

app.get('/postPlayer')

app.all('*'), (request, response) => {
  return response.sendStatus(404)
}

app.listen(1111, () => {
  console.log('Listening on port 1111...') // eslint-disable-line no-console
})
