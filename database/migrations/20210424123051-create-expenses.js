module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('expenses', {
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
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    recurrent: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    destination: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM(['Pago', 'Nao Pago']),
      allowNull: false,
    },
    due_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    pay_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    value: {
      type: Sequelize.FLOAT,
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
