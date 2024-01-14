import Service from '../service/service.js'

class Controller {
    constructor() {
        this.service = new Service()
    }

    saludo = (req, res) => {
        const respuesta = this.service.saludo()
        res.send(`<h1 style="color: blue;">${respuesta}</h1>`)
    }

    listarTodos = async (req, res) => {
        try{
        const listado = await this.service.listarTodos()
        res.json(listado)
    } catch(error){
        res.status(500).send(error.message)
    }
    }

    aniadirColor = async (req, res) => {
        try{
        const { color } = req.body
        const colorniadido = await this.service.aniadirColor(color)
        res.json(colorniadido)
    } catch(error){
        res.status(500).send(error.message)
    }
    }

    deleteColor = async (req, res) => {
        try{
        const { color } = req.body
        const colorBorrado = await this.service.deleteColor(color)
        res.json(colorBorrado)
    } catch(error){
        res.status(500).send(error.message)
    }
    }


    rutaNoAsignada = (req, res) => {
        const { baseUrl, method } = req
        res.status(500).send(`<h3 style="color: red;">Error:</h3>
        \n
        La ruta ${baseUrl}, no está implementada para el método ${method}`)
    }
}

export default Controller
