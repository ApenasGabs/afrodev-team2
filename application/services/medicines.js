const Medicines = require('../model/medicines');

exports.register = async (medicines) => {
  try {
    const newMedicines = await Medicines.create(medicines);
    return newMedicines;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while creating medicine');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (medicines) => {
  try {
    const medicine = await Medicines.findAll({
      where: medicines,
    });
    return medicine;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while finding the medicine');
    error.statusCode = 404;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const medicine = await Medicines.findAll({
      where: {
        id,
      },
    });
    return medicine;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while finding medicines by id');
    error.statusCode = 404;
    throw error;
  }
};

exports.patch = async (id, newMedicine) => {
  try {
    return await Medicines.update(newMedicine, {
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while updating medicine');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newMedicine) => {
  try {
    const medicine = await Medicines.findByPk(id);
    medicine.set(newMedicine);
    medicine.save();
    return medicine;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while updating medicine');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const medicine = await Medicines.destroy({
      where: {
        id,
      },
    });
    return medicine;
  } catch (err) {
    console.log(err);
    const error = new Error('An error occurred while deleting medicine');
    error.statusCode = 500;
    throw error;
  }
};
