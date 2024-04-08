import express from "express";
import { router } from "./router";
import fileUpload from "./middlewares/fileUpload";
import accessControl from "./middlewares/accessControl";

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {
        this.server.use(express.json());

        // Adiciona o middleware para permitir requisições de qualquer origem
        this.server.use(accessControl);

        // Adiciona o middleware para permitir a leitura de arquivos enviados pelo cliente
        this.server.use(fileUpload);
    }

    private router() {
        this.server.use(router);
    }
}
