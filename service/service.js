//import Model from '../model/model_MEM.js'
import Model from '../model/model_FS.js'

class Service{
    constructor(){
        this.model = new Model()
    }

    saludo = () => {

        const horaActual = new Date().toLocaleTimeString()

        if( horaActual < '06:00:00'){
            return `¡Buenas noches!`
        } else if (horaActual < '13:00:00')  {
            return `¡Buenos días!`
        } else if (horaActual < '20:00:00') {
            return `¡Buenas tardes!`
        } else {
            return `¡Buenas noches!`
        }

    }


    listarTodos = async () => {
        try{
    const listado = await this.model.listarTodos() 

    return listado

    } catch(error){
        throw(error)
    }
}


    aniadirColor = async (color) => {
try{
    let colorAniadido = await this.model.aniadirColor(color)

    if(! colorAniadido){
        colorAniadido = `El color que intenta añadir ya existe dentro de nuestro listado`
    }

    return colorAniadido

} catch(error){
    throw(error)
}
    }


    deleteColor = async (color) => {
try{ 
        let colorBorrado = await this.model.deleteColor(color)
    
        if(! colorBorrado){
            colorBorrado = `El color que intenta borrar, NO existe dentro de nuestro listado`
        }
    
        return colorBorrado
    
    } catch(error){
        throw(error)
    }
        }


}

export default Service