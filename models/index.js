const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const teamsModel = require('./teams')
const coachesModel = require('./coaches')
const playersModel = require('./players')
const skaterStatsModel = require('./skaterStats')
const goalieStatsModel = require('./goalieStats')


const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const teams = teamsModel(connection, Sequelize)
const coaches = coachesModel(connection, Sequelize, teams)
const players = playersModel(connection, Sequelize, teams)
const skaterStats = skaterStatsModel(connection, Sequelize, players)
const goalieStats = goalieStatsModel(connection, Sequelize, players)


players.belongsTo(teams)
teams.hasMany(players)

coaches.hasOne(teams)

skaterStats.hasOne(players)
goalieStats.hasOne(players)

module.exports = {
  teams,
  coaches,
  players,
  skaterStats,
  goalieStats,
  Op: Sequelize.Op
}
