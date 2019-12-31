const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .not()
        .isEmpty().withMessage('Please provide an email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('gender')
        .not()
        .isEmpty().withMessage('Please provide a gender'),    
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
];
/* const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('No name provided'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('No email provided')
        .isEmail()
        .withMessage('Please enter a valid email'),
    check('gender')
        .not()
        .isEmpty()
        .withMessage('No gender provided'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('No password provided')
        .isLength({min: 6})
        .withMessage('Your password must be more than 6 characters')
];


exports.userSigninValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('No email provided')
        .isEmail()
        .withMessage('Please enter a valid email'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('No password provided')
        .isLength({min: 6})
        .withMessage('Your password must be more than 6 characters')
]; */