const goalieStats = (connection, Sequelize, players) => {
  return connection.define('goalieStats', {
    playerId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: players, key: 'id' } },
    gamesPlayed: { type: Sequelize.STRING, allowNull: false },
    wins: { type: Sequelize.INTEGER },
    losses: { type: Sequelize.INTEGER },
    GAA: { type: Sequelize.INTEGER },
    savePercentage: { type: Sequelize.INTEGER },
    shutouts: { type: Sequelize.INTEGER },

  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = goalieStats
