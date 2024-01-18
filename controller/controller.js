import Service from '../service/service.js'

class Controller {
    constructor() {
        this.service = new Service()
    }

    salute = (req, res) => {
        const response = this.service.salute()
        res.send(`<h1 style="color: blue;">${response}</h1>`)
    }

    listAll = async (req, res) => {
        try{
        const list = await this.service.listAll()
        res.json(list)
    } catch(error){
        res.status(500).send(error.message)
    }
    }

    addColor = async (req, res) => {
        try{
        const { color } = req.body
        const addedColor = await this.service.addColor(color)
        res.json(addedColor)
    } catch(error){
        res.status(500).send(error.message)
    }
    }

    deleteColor = async (req, res) => {
        try{
        const { color } = req.body
        const deletedColor = await this.service.deleteColor(color)
        res.json(deletedColor)
    } catch(error){
        res.status(500).send(error.message)
    }
    }


    NonAssignedRoute = (req, res) => {
        const { baseUrl, method } = req
        res.status(500).send(`<h3 style="color: red;">Error:</h3>
        \n
        The route ${baseUrl}, is not implemented for the method used by your request: ${method}`)
    }
}

export default Controller
