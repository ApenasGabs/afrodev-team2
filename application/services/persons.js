const moment = require('moment');
const Persons = require('../model/persons');

exports.register = async (persons) => {
  try {
    if (moment().isBefore(moment(persons.birth_date, 'DD/MM/YYYY'), 'day')) {
      const error = new Error();
      error.message = 'Please, insert a date lower than current date.';
      error.statusCode = 400;
      return error;
    }
    const newpersons = await Persons.create(persons);
    return newpersons;
  } catch (err) {
    const error = new Error('An error occurred while creating persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (persons) => {
  try {
    const result = await Persons.findAll({
      where: persons,
    });
    return result;
  } catch (err) {
    const error = new Error('An error occurred while finding persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const result = await Persons.findByPk(id);
    if (!result) {
      const error = new Error();
      error.message = 'Id not found in database';
      error.statusCode = 404;
      return error;
    }
    return result;
  } catch (err) {
    const error = new Error('An error occurred while finding persons by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newpersons) => {
  try {
    if (moment().isBefore(moment(newpersons.birth_date, 'DD/MM/YYYY'), 'day')) {
      const error = new Error();
      error.message = 'Please, insert a date lower than current date.';
      error.statusCode = 400;
      return error;
    }
    const result = await Persons.update(newpersons, {
      where: {
        id,
      },
    });
    if (result === '0') {
      const error = new Error();
      error.message = 'Id not found in database';
      error.statusCode = 404;
      return error;
    }
    return result;
  } catch (err) {
    const error = new Error('An error occurred while updating persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newpersons) => {
  try {
    const persons = await Persons.findByPk(id);
    if (!persons) {
      const error = new Error();
      error.message = 'Id not found in database';
      error.statusCode = 404;
      return error;
    }
    if (moment().isBefore(moment(newpersons.birth_date, 'DD/MM/YYYY'), 'day')) {
      const error = new Error();
      error.message = 'Please, insert a date lower than current date.';
      error.statusCode = 400;
      return error;
    }
    persons.set(newpersons);
    persons.save();
    return persons;
  } catch (err) {
    const error = new Error('An error occurred while updating persons');
    error.statusCode = 500;
    throw error;
  }
};
