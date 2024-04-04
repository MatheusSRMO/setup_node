import { Router } from "express";
// import { firstController } from "./app/controller/FirstController";
import InstagramController from "./controller/InstagramController";
const router: Router = Router()

//Routes
router.get("/", (request, response) => response.json({ message: "Hello World" }));

router.get("/instagram", InstagramController.get)

export { router };
