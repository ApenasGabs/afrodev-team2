const controller = require('../../controllers/medicines');
const validators = require('../validators/medicines');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/medicines', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post medicines object'] = {
            in: 'body',
            description: "New medicines values",
            schema: {
                "$name": "new medicine",
                "$manufacturer": "the manufacturer",
                "$prescription": "false or true",
                "$amount": "amount of medicine",
                "$expiration_date": "dd/mm/yyyy",
                "$batch": "batch here"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });
  app.get('/medicines', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/medicines/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/medicines/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['post medicines object'] = {
            in: 'body',
            description: "New medicines values",
            schema: {
                "$name": "new medicine",
                "$manufacturer": "the manufacturer",
                "$prescription": "false or true",
                "$amount": "amount of medicine",
                "$expiration_date": "dd/mm/yyyy",
                "$batch": "batch here"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    console.log(request);
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.patch('/medicines/:id', validators.patchValidator(), async (request, reply) => {
    /*  #swagger.parameters['post medicines object'] = {
            in: 'body',
            description: "New medicines values",
            schema: {
                "$name": "new medicine",
                "$manufacturer": "the manufacturer",
                "$prescription": "false or true",
                "$amount": "amount of medicine",
                "$expiration_date": "dd/mm/yyyy",
                "$batch": "batch here"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/medicines/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};
