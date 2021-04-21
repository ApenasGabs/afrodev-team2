const controller = require('../../controllers/inputs');
const validators = require('../validators/inputs');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});
module.exports = (app) => {
  app.post('/input', validators.registerValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });
  app.get('/input', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });
  app.get('/input/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });
  app.put('/input/:id', validators.updateValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });
  app.patch('/input/:id', validators.patchValidator(), async (request, reply) => {
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(response);
  });
  app.delete('/input/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};
