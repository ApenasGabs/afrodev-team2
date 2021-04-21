const Medicines = require('../model/medicines');

exports.register = async (medicines) => {
  try {
    const newMedicines = await Medicines.create(medicines);
    return newMedicines;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating medicines');
    error.statusCode = 500;
    throw error;
  }
};
