module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('persons', {
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
    document: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    birth_date: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
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

  down: async (queryInterface) => queryInterface.dropTable('persons'),
};
