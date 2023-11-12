import { Request, Response } from "express";
import IController from "./ControllerInterface";
// import { v4 as uuidv4 } from "uuid";
import CarModel from "../database/models/cars";


class CarController implements IController {
    async index(req: Request, res: Response): Promise<Response> {
      try {
        const { inputTanggal, waktuJemput, jumlahPenumpang } = req.query
        const qCars = CarModel.query();

        if (jumlahPenumpang) {
          qCars.where('capacity', '>=', +jumlahPenumpang)
        }

        if (inputTanggal) {
          qCars.whereRaw("to_char(\"availableAt\", 'YYYY-MM-DD') = ?", [inputTanggal as string])
        }

        if (waktuJemput) {
          qCars.whereRaw("to_char(\"availableAt\", 'HH24:MI') <= ?", [waktuJemput])
        }

        const cars = await qCars.debug()
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


    // async searchCars(req: Request, res: Response) {

    //   const { tipeDriver, tanggal, pickupTime, jumlahPenumpang } = req.query;
    //   console.log(tanggal, pickupTime, jumlahPenumpang)

    //     Konversi tanggal dan pickupTime ke format yang sesuai dengan format di database
    //     const targetDate = new Date(`${tanggal}T${pickupTime}:00.000Z`);
    //     console.log(targetDate);

    //     const data = await CarModel.query()
    //         .where('availableAt', '>=', targetDate)
    //         .where('capacity', '>=', jumlahPenumpang)
    //         .orderBy('rentPerDay', 'asc');

    //     res.json(data);
    //   const { tipeDriver, tanggal, pickupTime, jumlahPenumpang } = req.params;
        
    //   // Konversi tanggal dan pickupTime ke format yang sesuai dengan format di database
    //   const targetDate = new Date(`${tanggal}T${pickupTime}:00.000Z`);
    //   console.log(targetDate);

    //   const data = await CarModel.query()
    //     .where('availableAt', '<=', targetDate)
    //     .where('capacity', '>=', jumlahPenumpang)
    //     .orderBy('rentPerDay', 'asc');

    //   res.json(data);


    // }

    // async searchCarsPost(req: Request, res: Response) {
    //   try {
    //       const { tipeDriver, tanggal, pickupTime, jumlahPenumpang } = req.body;

    //       // Ubah tanggal dan waktu ke format yang sesuai dengan format di database
    //       const targetDate = new Date(`${tanggal}T${pickupTime}:00.000Z`);

    //       // Lakukan query ke database sesuai dengan logika pencarian Anda
    //       const data = await CarModel.query()
    //           .where('availableAt', '>=', targetDate)
    //           .where('capacity', '>=', jumlahPenumpang)
    //           .orderBy('rentPerDay', 'asc');

    //       // Tampilkan hasil pencarian
    //       res.json(data);
    //   } catch (error) {
    //       console.error(error);
    //       res.status(500).json({ error: 'Internal Server Error' });
    //   }
    // }


    
}

export default new CarController();