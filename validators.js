import { body } from 'express-validator';
//import { phoneNumberParser } from './phoneValidator.js';

export const validators = [
    body("name").exists().withMessage("Name can't be empty")
        .isLength({ min: 3 }).withMessage("Name must have at least 3 characters"),
    body("telephone").exists().withMessage("Phone can't be empty")
        .isLength({ min: 5, max: 25 }).isNumeric().withMessage("Phone must be valid and not contain spaces"),
    body("email").exists().withMessage("Email can't be empty")
        .isEmail().withMessage("Email must be valid")
]