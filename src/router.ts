import { Router } from "express";
import InstagramController from "./controller/InstagramController";
import multer from "multer";

const upload = multer();

const router: Router = Router()

//Routes
router.get("/", (request, response) => response.json({ message: "Hello World" }));

router.get("/instagram", InstagramController.get)
router.post("/instagram", InstagramController.post)

export { router };
