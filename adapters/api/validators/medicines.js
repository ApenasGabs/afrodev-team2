const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('manufacturer')
    .notEmpty()
    .withMessage('manufacturer is required')
    .isLength({ max: 50 })
    .withMessage('manufacturer must have less then 200 characters'),
  check('amount')
    .notEmpty()
    .withMessage('amount is required')
    .isInt()
    .withMessage('invalid amount'),
  check('batch')
    .notEmpty()
    .withMessage('batch is required'),
  check('prescription')
    .optional(),
  check('expiration_date')
    .notEmpty(),

];

exports.updateValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('manufacturer')
    .notEmpty()
    .withMessage('manufacturer is required')
    .isLength({ max: 50 })
    .withMessage('manufacturer must have less then 200 characters'),
  check('amount')
    .notEmpty()
    .withMessage('amount is required')
    .isInt()
    .withMessage('invalid amount'),
  check('batch')
    .notEmpty()
    .withMessage('batch is required'),
  check('prescription')
    .optional(),
  check('expiration_date')
    .notEmpty(),

];

exports.patchValidator = () => [
  check('name')
    .optional(),
  check('manufacturer')
    .optional()
    .isLength({ max: 50 })
    .withMessage('manufacturer must have less then 200 characters'),
  check('amount')
    .optional()
    .isInt()
    .withMessage('invalid amount'),
  check('batch')
    .optional(),
  check('prescription')
    .optional(),
  check('expiration_date')
    .optional(),
];
