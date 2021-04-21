const personsService = require('../../application/services/persons');

exports.post = async (request) => {
  const result = await personsService.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await personsService.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await personsService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await personsService.update(id, request.body);
  return result;
};

exports.patch = async (id, request) => {
  const result = await personsService.patch(id, request.body);
  return result;
};
