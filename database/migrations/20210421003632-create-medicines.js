module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('medicines', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    prescription: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    expiration_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    batch: {
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
  down: async (queryInterface) => queryInterface.dropTable('medicines'),
};
