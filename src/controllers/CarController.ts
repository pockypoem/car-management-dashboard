import { Request, Response } from "express";
import IController from "./ControllerInterface";
import { v4 as uuidv4 } from "uuid";
import CarModel from "../database/models/cars";


class CarController implements IController {
    async index(req: Request, res: Response): Promise<Response> {
      try {
        const cars = await CarModel.query();
        return res.status(200).json(cars);
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          error: "Internal Server Error"
        })
      }
    }
    
}

export default new CarController();