import express from 'express'
import Controller from '../controller/controller.js'

class RouterRutasNoAsignadas{
    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start(){
        this.router.get('/*', this.controller.rutaNoAsignada)
        this.router.post('/*', this.controller.rutaNoAsignada)
        this.router.put('/*', this.controller.rutaNoAsignada)
        this.router.delete('/*', this.controller.rutaNoAsignada)

        return this.router
    }
}

export default RouterRutasNoAsignadas
