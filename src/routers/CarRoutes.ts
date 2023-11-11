import BaseRoutes from "./BaseRouter";

// Controllers
import CarController from "../controllers/CarController";


class CarRoutes extends BaseRoutes {

    public routes(): void {
        this.router.get("/", CarController.index);
    }

}

export default new CarRoutes().router;