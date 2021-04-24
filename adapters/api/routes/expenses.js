const controller = require('../../controllers/expenses');
const validators = require('../validators/expenses');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/expenses', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post expenses object'] = {
            in: 'body',
            description: "New expenses values",
            schema: {
                "$name": "new expense",
                "$amount": "the amount",
                "$recurrent": "false or true",
                "$destination": "the destination",
                "$status": "Pago or Nao Pago",
                "$due_date": "YYYY/MM/DD",
                "$pay_date": "YYYY/MM/DD",
                "$value": "the value (float)"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/expenses', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/expenses/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/expenses/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['put expenses object'] = {
            in: 'body',
            description: "New expenses values",
            schema: {
                "$name": "new expense",
                "$amount": "the amount",
                "$recurrent": "false or true",
                "$destination": "the destination",
                "$status": "Pago or Nao Pago",
                "$due_date": "YYYY/MM/DD",
                "$pay_date": "YYYY/MM/DD",
                "$value": "the value (float)"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.patch('/expenses/:id', validators.patchValidator(), async (request, reply) => {
    /*  #swagger.parameters['patch expenses object'] = {
            in: 'body',
            description: "New expenses values",
            schema: {
                "$name": "new expense",
                "$amount": "the amount",
                "$recurrent": "false or true",
                "$destination": "the destination",
                "$status": "Pago or Nao Pago",
                "$due_date": "YYYY/MM/DD",
                "$pay_date": "YYYY/MM/DD",
                "$value": "the value (float)"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.patch(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/expenses/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });

};
