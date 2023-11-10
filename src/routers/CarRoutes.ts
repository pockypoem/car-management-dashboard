import BaseRoutes from "./BaseRouter";

// Controllers
import CarController from "../controllers/CarController";


class CarRoutes extends BaseRoutes {

    public routes(): void {
        this.router.get("/", CarController.index);
        this.router.post("/", CarController.create);
        this.router.get("/:id", CarController.show);
        this.router.put("/:id", CarController.update);
        this.router.delete("/:id", CarController.delete);
    }

}

export default new CarRoutes().router;