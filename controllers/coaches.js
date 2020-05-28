const models = require('../models')

const getAllCoaches = async (request, response) => {
  const coaches = await models.coaches.findAll({
  })

  return coaches
    ? response.send(coaches)
    : response.sendStatus(404)
}

const getCoachByLastName = async (request, response) => {
  try {
    const { lastName } = request.params
    const coach = await models.coaches.findOne({
      where: {
        lastName: { [models.Op.like]: `%${lastName}%` }
      },

      include: [
        { model: models.teams },
      ]
    })

    return coach
      ? response.send(coach)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve coach, please try again')
  }
}

module.exports = { getAllCoaches, getCoachByLastName }
