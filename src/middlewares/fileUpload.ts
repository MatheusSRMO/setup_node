
import { Request, Response } from "express";
import multiparty from "multiparty";
import { NextFunction } from "express";

const fileUpload = (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "POST" && req.headers["content-type"]?.startsWith("multipart/form-data")) {
        const form = new multiparty.Form();
        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            req.body = fields;
            req.files = files;
            next();
        });
    }
    else {
        next();
    }
}

export default fileUpload;
