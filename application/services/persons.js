/* eslint-disable no-console */
const Persons = require('../model/persons');

exports.register = async (persons) => {
  try {
    const newpersons = await Persons.create(persons);
    return newpersons;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating persons');
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
    console.log(err);
    const error = new Error('An error ocurred while finding persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const result = await Persons.findAll({
      where: {
        id,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding persons by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newpersons) => {
  try {
    return await Persons.update(newpersons, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating persons');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newpersons) => {
  try {
    const persons = await Persons.findOne({ id });
    persons.set(newpersons);
    persons.save();
    return persons;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating persons');
    error.statusCode = 500;
    throw error;
  }
};
