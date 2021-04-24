const inputService = require('../../application/services/inputs');

exports.post = async (request) => {
  const result = await inputService.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await inputService.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await inputService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await inputService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await inputService.patch(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await inputService.delete(id);
  return result;
};
