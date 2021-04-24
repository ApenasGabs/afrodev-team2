const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name')
    .isString()
    .notEmpty()
    .withMessage('name is required'),
  check('type')
    .isString()
    .notEmpty()
    .withMessage('type is required'),
  check('expiration_date')
    .isString()
    .optional()
    .custom((val) => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(val))
    .withMessage('invalid date format'),
  check('quantity')
    .isDecimal()
    .notEmpty()
    .withMessage('quantity is required'),
  check('unit')
    .isString()
    .notEmpty()
    .withMessage('unit is required'),
];

exports.updateValidator = () => [
  check('name')
    .isString()
    .notEmpty()
    .withMessage('name is required'),
  check('type')
    .isString()
    .notEmpty()
    .withMessage('type is required'),
  check('expiration_date')
    .isString()
    .optional()
    .custom((val) => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(val))
    .withMessage('format date invalid'),
  check('quantity')
    .isDecimal()
    .notEmpty()
    .withMessage('quantity is required'),
  check('unit')
    .isString()
    .notEmpty()
    .withMessage('unit is required'),
];

exports.patchValidator = () => [
  check('name')
    .isString()
    .optional()
    .withMessage('name is required'),
  check('type')
    .isString()
    .optional()
    .withMessage('type is required'),
  check('expiration_date')
    .isString()
    .optional()
    .custom((val) => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(val))
    .withMessage('format date invalid'),
  check('quantity')
    .isDecimal()
    .optional()
    .withMessage('quantity is required'),
  check('unit')
    .isString()
    .optional()
    .withMessage('unit is required'),
];
