const medicineService = require('../../application/services/medicines');

exports.post = async (request) => {
  const result = await medicineService.register(request.body);
  return result;
};
exports.get = async (request) => {
  const result = await medicineService.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await medicineService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await medicineService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await medicineService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await medicineService.delete(id);
  return result;
};
