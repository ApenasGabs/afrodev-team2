/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
const moment = require('moment');
const Inputs = require('../model/inputs');

exports.register = async (inputs) => {
  try {
    const today = moment().add(5, 'days');
    if (inputs.expiration_date != null && today.isAfter(moment(inputs.expiration_date, 'DD/MM/YYYY'), 'day')) {
      const error = new Error();
      error.message = 'Expiration date expired';
      error.statusCode = 400;
      return error;
    }
    const newIpnuts = await Inputs.create(inputs);
    return newIpnuts;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating input');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (input) => {
  try {
    const inputs = await Inputs.findAll({
      where: input,
    });
    return inputs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding inputs');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const inputs = await Inputs.findAll({
      where: {
        id,
      },
    });
    return inputs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding ong by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.patch = async (id, newInputs) => {
  try {
    const today = moment().add(5, 'days');
    if (newInputs.expiration_date != null && today.isAfter(moment(newInputs.expiration_date, 'DD/MM/YYYY'), 'day')) {
      const error = new Error();
      error.message = 'Expiration date expired';
      error.statusCode = 400;
      return error;
    }
    return await Inputs.update(newInputs, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating inputs');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newInputs) => {
  try {
    const today = moment().add(5, 'days');
    if (newInputs.expiration_date != null && today.isAfter(moment(newInputs.expiration_date, 'DD/MM/YYYY'), 'day')) {
      const error = new Error();
      error.message = 'Expiration date expired';
      error.statusCode = 400;
      return error;
    }
    const inputs = await Inputs.findByPk(id);
    inputs.set(newInputs);
    inputs.save();
    return inputs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating inputs');
    error.statusCode = 500;
    throw error;
  }
};
exports.delete = async (id) => {
  try {
    const inputs = await Inputs.destroy({
      where: {
        id,
      },
    });
    return inputs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting inputs');
    error.statusCode = 500;
    throw error;
  }
};
