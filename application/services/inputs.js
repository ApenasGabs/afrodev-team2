const Inputs = require('../model/inputs');

exports.register = async (inputs) => {
  try {
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
    const inputs = await Inputs.findOne({ id });
    inputs.set(newInputs);
    inputs.save;
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