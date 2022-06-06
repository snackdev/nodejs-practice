import {NextFunction, Request, Response} from "express";
import {body, checkSchema, Location, Schema, ValidationChain, validationResult} from 'express-validator';

const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({
            errors: errors.array()
        });
    };
};

const genSchema = (keys: string[]): Schema => (
    Object.fromEntries(keys.map(key => [key, {
        notEmpty: true,
        errorMessage: `${key} field cannot be empty`
    }]))
);

const required = (keys: string[], location: Location = 'body') => validate(checkSchema(genSchema(keys), [location]))

export const ApiValidator = {
    validate,
    genSchema,
    required
}