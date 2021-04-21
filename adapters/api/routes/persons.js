const controller = require('../../controllers/persons');
const validators = require('../validators/persons');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/persons', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post persons object'] = {
            in: 'body',
            description: "New persons values",
            schema: {
                "$name": "new persons",
                "$document": "999.999.999-99",
                "$birth_date": "00/00/0000"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/persons', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/persons/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/persons/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['post persons object'] = {
            in: 'body',
            description: "New persons values",
            schema: {
                "$name": "new persons",
                "$document": "999.999.999-99",
                "$birth_date": "00/00/0000"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.patch('/persons/:id', validators.patchValidator(), async (request, reply) => {
    /*  #swagger.parameters['post persons object'] = {
            in: 'body',
            description: "New persons values",
            schema: {
                "$name": "new persons",
                "$document": "999.999.999-99",
                "$birth_date": "00/00/0000"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(response);
  });
};
