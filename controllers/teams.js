const models = require('../models')

const getAllTeams = async (request, response) => {
  const teams = await models.teams.findAll({

    include: [
      { model: models.coaches }
    ]
  })

  return teams
    ? response.send(teams)
    : response.sendStatus(404)
}

const getTeamsWithPlayers = async (request, response) => {
  const { input } = request.params
  const teams = await models.teams.findOne({
    where: {
      team: { [models.Op.like]: `%${input}%` }
    },

    include: [
      { model: models.players }
    ]
  })

  return teams
    ? response.send(teams)
    : response.sendStatus(404)
}

module.exports = { getAllTeams, getTeamsWithPlayers }
