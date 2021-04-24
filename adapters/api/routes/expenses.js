const validators = require('../../controllers/expenses');
const controller = require('../validators/expenses');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/expenses', validators.registerValidator(), async (request, reply) => {
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
};
