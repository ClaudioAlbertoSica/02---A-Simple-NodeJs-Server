import express from 'express'
import Controller from '../controller/controller.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start(){
        this.router.get('/', this.controller.salute)
        this.router.get('/colores', this.controller.listAll)
        //Alright, originally this server was intended to store "words", that represent colors, with no validation at all. So it can really be used for words, instead of just colors (as this is an excersice I did for a course, I just left the name "colors"instead of "words", to be truthful with the translation from Spanish)
        this.router.post('/colores', this.controller.addColor)
        //This additional endpoint wasn't part of the original project scope of my course. It allows to remove colors that were previously added to the list.
        this.router.delete('/colores', this.controller.deleteColor)

        return this.router
    }
}

export default Router
