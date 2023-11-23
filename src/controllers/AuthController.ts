import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
import UserModel from "../database/models/users";



class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { email, password, isAdmin } = req.body;

            const hashedPassword: string = await Authentication.passwordHash(password);

            await UserModel.query().insert({
                email,
                password: hashedPassword,
                isAdmin: isAdmin || true, 
            });

            return res.status(201).json({message: "Registrasi Sukses!"});
        } catch (error) {
            console.error("Error during registration:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    login = async(req: Request, res: Response): Promise<Response> => {
        // cari data user by email
        const { email, password } = req.body;
        const user = await UserModel.query().findOne({email}); 

        // check password
        if(user) {
            const compare = await Authentication.passwordCompare(password, user.password);

            // generate token
            if(compare) {
                const token = Authentication.generateToken(user.id, user.password);

                return res.send({
                    token
                });
            }
            return res.send("Auth Failed");
        }

        return res.send("User Not Found");

    }

    // dummy method for checking only
    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.credential);
    }
    
}

export default new AuthController();