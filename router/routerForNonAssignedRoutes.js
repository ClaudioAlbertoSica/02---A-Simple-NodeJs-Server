import express from 'express'
import Controller from '../controller/controller.js'

class routerForNonAssignedRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start(){
        this.router.get('/*', this.controller.NonAssignedRoute)
        this.router.post('/*', this.controller.NonAssignedRoute)
        this.router.put('/*', this.controller.NonAssignedRoute)
        this.router.delete('/*', this.controller.NonAssignedRoute)

        return this.router
    }
}

export default routerForNonAssignedRoutes
