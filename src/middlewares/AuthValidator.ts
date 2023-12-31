import {Request, Response, NextFunction} from "express";
import { check, validationResult } from "express-validator";

const validate = [
    check('email').isString(),
    check('password').isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req); // get the error

        // Jika ada error
        if(!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }

        next();
    }
]

export default validate;