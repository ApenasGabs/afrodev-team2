const medicineService = require('../../application/services/medicines');

exports.post = async (request) => {
  const result = await medicineService.register(request.body);
  return result;
};
