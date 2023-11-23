import BaseRoutes from "./BaseRouter";
import { auth } from "../middlewares/AuthMiddleware";

// Controllers
import CarController from "../controllers/CarController";


class CarRoutes extends BaseRoutes {

    public routes(): void {
        // this.router.use(auth);
        
        this.router.get("/", CarController.index);
        this.router.post("/", auth, CarController.create);
        this.router.get("/:id", auth, CarController.show);
        this.router.put("/:id", auth, CarController.update);
        this.router.delete("/:id", auth, CarController.delete);
    }

}

export default new CarRoutes().router;