const express = require('express')
const bodyParser = require('body-parser')

const { getAllTeams, getTeamsWithPlayersAndStats } = require('./controllers/teams')
const { getAllPlayers, getPlayerByLastName, saveNewPlayer } = require('./controllers/players')
const { getAllCoaches, getCoachByLastName } = require('./controllers/coaches')


const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/teams', getAllTeams)
app.get('/teams/:team', getTeamsWithPlayersAndStats)

app.get('/players', getAllPlayers)
app.get('/players/:lastName', getPlayerByLastName)
app.post('/players', bodyParser.json(), saveNewPlayer)

app.get('/coaches/', getAllCoaches)
app.get('/coaches/:lastName', getCoachByLastName)

app.all('*'), (request, response) => {
  return response.sendStatus(404)
}

app.listen(1111, () => {
  console.log('Listening on port 1111...') // eslint-disable-line no-console
})
