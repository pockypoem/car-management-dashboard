import { Request, Response } from "express";
import IController from "./ControllerInterface";
// import { v4 as uuidv4 } from "uuid";
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

    async create(req: Request, res: Response) : Promise<Response> {
      const carData = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.specs),
      };

      try {
        const newCar = await CarModel.query().insert(carData);
        return res.status(201).send(newCar)
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          error: "Internal Server Error"
        })
      }
    }

    async update(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      const updatedCarData = {
        ...req.body,
        specs: JSON.stringify(req.body.specs),
        options: JSON.stringify(req.body.specs),
      };
  
      try {
        const updatedCar = await CarModel.query().patchAndFetchById(id, updatedCarData);
        if (!updatedCar) {
          return res.status(404).json({ error: 'Car not found' });
        }
        return res.status(200).send(updatedCarData);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }

    async show(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;

      try {
        const car = await CarModel.query().findById(id);
    
        if (!car) {
          // Jika tidak ada mobil dengan ID tersebut
          return res.status(404).json({ message: 'Data not found' });
        }
    
        return res.status(200).json(car);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }

    async delete(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
    
      try {
        const car = await CarModel.query().deleteById(id);
    
        if (car === 0) {
          return res.status(404).json({ message: 'Data not found' });
        }
    
        return res.status(204).json({ message: 'Berhasil hapus data' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }


    
}

export default new CarController();