const controller = require('../../controllers/medicines');
const validators = require('../validators/medicines');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/medicines', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post ong object'] = {
            in: 'body',
            description: "New ong values",
            schema: {
                "$name": "new medicine",
                "$manufacturer": "the manufacturer",
                "$prescription": "false or true",
                "$amount": "amount of medicine",
                "$expiration_date": "yyyy/mm/dd",
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
