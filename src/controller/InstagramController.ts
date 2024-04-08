import { Request, Response } from "express";

class InstagramController {
    public get(request: Request, response: Response): Response {
        return response.json({ message: "Hello World from instagram" });
    }
}

export default new InstagramController();
