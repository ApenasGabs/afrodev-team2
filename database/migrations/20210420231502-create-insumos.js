module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('inputs', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expiration_date: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    unit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface, Sequelize) => {
  },
};
