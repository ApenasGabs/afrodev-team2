const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('document')
    .notEmpty()
    .custom((val) => /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/g.test(val))
    .withMessage('invalid document format'),
  check('birth_date')
    .notEmpty()
    .custom((val) => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(val))
    .withMessage('invalid date format'),

];

exports.updateValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('document')
    .notEmpty()
    .custom((val) => /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/g.test(val))
    .withMessage('invalid document format'),
  check('birth_date')
    .notEmpty()
    .custom((val) => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(val))
    .withMessage('invalid date format'),

];

exports.patchValidator = () => [
  check('name')
    .notEmpty()
    .withMessage('name is required'),
  check('document')
    .notEmpty()
    .custom((val) => /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/g.test(val))
    .withMessage('invalid document format'),
  check('birth_date')
    .notEmpty()
    .custom((val) => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g.test(val))
    .withMessage('invalid date format'),

];
