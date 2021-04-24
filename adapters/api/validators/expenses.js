const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('amount')
    .notEmpty()
    .withMessage('amount is required'),
  check('recurrent')
    .notEmpty()
    .withMessage('recurrent is required'),
  check('destination')
    .notEmpty()
    .withMessage('destination is required'),
  check('status')
    .notEmpty()
    .withMessage('status is required'),
  check('due_date')
    .notEmpty()
    .withMessage('due_date is required'),
  check('due_date')
    .notEmpty()
    .withMessage('due_date is required'),
  check('value')
    .notEmpty()
    .withMessage('value_date is required'),
];

exports.updateValidator = () => [
  check('name')
    .notEmpty()
    .isLength({ max: 50 })
    .withMessage('name is required'),
  check('amount')
    .notEmpty()
    .withMessage('amount is required'),
  check('recurrent')
    .notEmpty()
    .withMessage('recurrent is required'),
  check('destination')
    .notEmpty()
    .withMessage('destination is required'),
  check('status')
    .notEmpty()
    .withMessage('status is required'),
  check('due_date')
    .notEmpty()
    .withMessage('due_date is required'),
  check('due_date')
    .notEmpty()
    .withMessage('due_date is required'),
  check('value')
    .notEmpty()
    .withMessage('value_date is required'),
];

exports.patchValidator = () => [
  check('name')
    .optional()
    .isLength({ max: 50 })
    .withMessage('name must have less then 50 characters'),
  check('amount')
    .optional()
    .isInt()
    .withMessage('invalid amount'),
  check('recurrent')
    .optional(),
  check('destination')
    .optional(),
  check('status')
    .optional(),
  check('due_date')
    .optional(),
  check('due_date')
    .optional(),
  check('value')
    .optional()
];
