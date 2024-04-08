import { Request, Response } from "express";
import InstagramCollection from "../collections/InstagramCollection";
import { close, connect } from "../config/database";
import fs from 'fs';
// import csv from 'csv-parser';

class InstagramController {
    public async get(request: Request, response: Response): Promise<Response> {
        await connect();

        const instagram = await InstagramCollection.find();
        console.log(instagram);

        await close();
        return response.json({ message: "Todos os dados", data: instagram});
    }

    // Rota para subir um arquivo csv com os dados do instagram e salvar no banco de dados
    public async post(request: Request, response: Response): Promise<Response> {
        try {            
            // Pega o arquivo do multipart-form-data enviado pelo cliente 
            if (request.file) {
                const fileContent = request.file.buffer.toString('utf8');
                // sabendo que o arquivo é um csv, podemos separar as linhas 
            } else {
                return response.status(400).json({ error: 'Arquivo não encontrado.' });
            }

            return response.json({ message: 'Arquivo recebido com sucesso.' });
        } catch (error) {
            return response.status(500).json({ error: 'Erro interno do servidor.' });
        }
    }
}

export default new InstagramController();
