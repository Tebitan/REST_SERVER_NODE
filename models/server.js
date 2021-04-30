const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middleware
        this.middlewares();

        //Rutas de la Aplicacion 
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //lectura y parseo del Body para configurar en formato JSON
        this.app.use(express.json());


        //directorio publico
        this.app.use(express.static('public'));

    };

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto", this.port);
        });
    };
}

module.exports = Server;