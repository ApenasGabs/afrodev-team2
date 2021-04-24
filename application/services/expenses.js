const Expenses = require('../model/expenses');

exports.register = async (expenses) => {
  try {
    const newExpenses = await Expenses.create(expenses);
    return newExpenses;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating expense');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (expenses) => {
  try {
    const expense = await Expenses.findAll({
      where: expenses,
    });
    return expense;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred finding the expense');
    error.statusCode = 404;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const expense = await Expenses.findAll({
      where: {
        id,
      },
    });
    return expense;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while finding expenses by id');
    error.statusCode = 404;
    throw error;
  }
};

exports.patch = async (id, newExpense) => {
  try {
    return await Expenses.update(newExpense, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while updating expense');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newExpense) => {
  try {
    const expense = await Expenses.findByPk(id);
    expense.set(newExpense);
    expense.save();
    return expense;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while pudating expense');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const expense = await Expenses.destroy({
      where: {
        id,
      },
    });
    return expense;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while deleting expense');
    error.statusCode = 404;
    throw error;
  }
};
