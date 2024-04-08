
import { Request, Response } from "express";
import { NextFunction } from "express";
import multer from "multer";

const fileUpload = (req: Request, res: Response, next: NextFunction) => {
    // Verifica se a requisição é um POST e se o content-type é multipart/form-data
    if (req.method === "POST" && req.headers["content-type"]?.startsWith("multipart/form-data")) {
        // Configuração do multer para lidar com o upload de arquivos
        const upload = multer().single('file');

        // Executa o middleware do multer para lidar com o upload
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                // Se houver um erro do multer, retorne um erro 400
                return res.status(400).json({ error: err.message });
            } else if (err) {
                // Se houver outro tipo de erro, retorne um erro 500
                return res.status(500).json({ error: err.message });
            }

            // Se não houver erro, continue para o próximo middleware
            next();
        });
    } else {
        // Se não for um POST multipart/form-data, passa para o próximo middleware
        next();
    }
}

export default fileUpload;
