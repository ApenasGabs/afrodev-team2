const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
    const result = validationResult(req);
    return result.errors;
};

exports.registerValidator = () => [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('type')
        .notEmpty()
        .withMessage('type is required'),
    check('expiration_date')
        .optional()
        .isDate()
        .withMessage('format date invalid'),
    check('quantity')
        .notEmpty()
        .withMessage('quantity is required'),
    check('unit')
        .notEmpty()
        .withMessage('unit is required'),    
] 

exports.updateValidator = () => [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('type')
        .notEmpty()
        .withMessage('type is required'),
    check('expiration_date')
        .isDate()
        .withMessage('format date invalid'),
    check('quantity')
        .notEmpty()
        .withMessage('quantity is required'),
    check('unit')
        .notEmpty()
        .withMessage('unit is required'),    
] 

exports.patchValidator = () => [
    check('name')
        .notEmpty()
        .withMessage('name is required'),
    check('type')
        .notEmpty()
        .withMessage('type is required'),
    check('expiration_date')
        .isDate()
        .withMessage('format date invalid'),
    check('quantity')
        .notEmpty()
        .withMessage('quantity is required'),
    check('unit')
        .notEmpty()
        .withMessage('unit is required'),    
] 