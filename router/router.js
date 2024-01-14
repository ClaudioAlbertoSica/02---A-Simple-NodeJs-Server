import express from 'express'
import Controller from '../controller/controller.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start(){
        this.router.get('/', this.controller.saludo)
        this.router.get('/colores', this.controller.listarTodos)
        this.router.post('/colores', this.controller.aniadirColor)
        //Añado una ruta más, que permite borrar un color del listado
        this.router.delete('/colores', this.controller.deleteColor)

        return this.router
    }
}

export default Router
