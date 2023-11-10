import { Request, Response } from "express";
import IController from "./ControllerInterface";
import { v4 as uuidv4 } from "uuid";


// Dummy Data
let data: any[] = [
    {
        "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
        "plate": "DBH-3491",
        "manufacture": "Ford",
        "model": "F150",
        "image": "https://i.ibb.co/58nQ0C0/car01-min.jpg",
        "rentPerDay": 200000,
        "capacity": 2,
        "description": " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
        "availableAt": "2023-10-25T23:49:05.563Z",
        "transmission": "Automatic",
        "available": true,
        "type": "Sedan",
        "year": 2022,
        "options": [
          "Cruise Control",
          "Tinted Glass",
          "Tinted Glass",
          "Tinted Glass",
          "AM/FM Stereo"
        ],
        "specs": [
          "Brake assist",
          "Leather-wrapped shift knob",
          "Glove box lamp",
          "Air conditioning w/in-cabin microfilter",
          "Body color folding remote-controlled pwr mirrors",
          "Dual-stage front airbags w/occupant classification system"
        ]
    },
    {
        "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
        "plate": "WXB-3984",
        "manufacture": "BMW",
        "model": "X5",
        "image": "https://i.ibb.co/7G5vDvs/car02-min.jpg",
        "rentPerDay": 800000,
        "capacity": 6,
        "description": " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
        "availableAt": "2023-10-25T23:49:05.563Z",
        "transmission": "Automatic",
        "available": false,
        "type": "Convertible",
        "year": 2019,
        "options": [
          "Keyless Entry",
          "Power Windows",
          "MP3 (Single Disc)",
          "CD (Multi Disc)",
          "Navigation"
        ],
        "specs": [
          "Rear passenger map pockets",
          "Electrochromic rearview mirror",
          "Dual chrome exhaust tips",
          "Locking glove box",
          "Pwr front vented disc/rear drum brakes"
        ]
    },
    {
        "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
        "plate": "OSL-4224",
        "manufacture": "Lincoln",
        "model": "MKZ",
        "image": "https://i.ibb.co/G7VMHxZ/car03-min.jpg",
        "rentPerDay": 900000,
        "capacity": 6,
        "description": " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
        "availableAt": "2023-10-27T02:49:05.563Z",
        "transmission": "Automanual",
        "available": true,
        "type": "Sedan",
        "year": 2021,
        "options": [
          "Bucket Seats",
          "Airbag: Passenger",
          "Airbag: Driver",
          "Power Seats",
          "Airbag: Side",
          "Antilock Brakes",
          "CD (Multi Disc)"
        ],
        "specs": [
          "Driver & front passenger map pockets",
          "Direct-type tire pressure monitor system",
          "Cargo area lamp",
          "Glove box lamp",
          "Silver finish interior door handles",
          "Driver & front passenger advanced multistage airbags w/occupant sensors",
          "Silver accent IP trim finisher -inc: silver shifter finisher",
          "Fasten seat belt warning light/chime"
        ]
    },
]


class CarController implements IController {
    index(req: Request, res: Response): Response | Promise<Response> {
        return res.send(data);
    }
    create(req: Request, res: Response): Response | Promise<Response> {
        const { 
            plate, 
            manufacture, 
            model, 
            image, 
            rentPerDay, 
            capacity, 
            description, 
            availableAt, 
            transmission, 
            available, 
            type, 
            year, 
            options, 
            specs } = req.body;

        const newCar = {
            id: uuidv4(),
            plate, 
            manufacture, 
            model, 
            image, 
            rentPerDay, 
            capacity, 
            description, 
            availableAt, 
            transmission, 
            available, 
            type, 
            year, 
            options, 
            specs
        };

        data.push(newCar);

        return res.send("Create Success");
    }
    show(req: Request, res: Response): Response | Promise<Response> {
        const { id } = req.params;

        let car = data.find(item => item.id == id);

        return res.send(car);

    }
    update(req: Request, res: Response): Response | Promise<Response> {
        const { id } = req.params;

        const { 
          plate, 
          manufacture, 
          model, 
          image, 
          rentPerDay, 
          capacity, 
          description, 
          availableAt, 
          transmission, 
          available, 
          type, 
          year, 
          options, 
          specs } = req.body;

        let car = data.find(item => item.id == id);

        car.plate = plate;
        car.manufacture = manufacture;
        car.model = model;
        car.image = image;
        car.rentPerDay = rentPerDay;
        car.capacity = capacity;
        car.description = description;
        car.availableAt = availableAt;
        car.transmission = transmission;
        car.available = available;
        car.type = type;
        car.year = year;
        car.options = options;
        car.specs = specs;

        return res.send("Update sukses");

    }
    delete(req: Request, res: Response): Response | Promise<Response> {
        const { id } = req.params;

        let cars = data.filter(item => item.id != id);
        return res.send(cars);
    }
    
}

export default new CarController();