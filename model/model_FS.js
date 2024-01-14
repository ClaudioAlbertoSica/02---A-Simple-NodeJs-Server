import fs from 'fs'

class Model_FS {
    constructor() {
        this.contenedor = 'contenedor.json'
    }

    async verificarPath() {
        try {
            if (!(await Promise.resolve(fs.existsSync(this.contenedor)))) {
                await fs.promises.writeFile(this.contenedor, '[]', 'utf-8')
            }
        } catch (error) {
            throw new Error(`Error al verificar el FilePath: ${this.contenedor} \n ${error}`)
        }
    }

    async leerArchivo() {
        try {
            let listado = []
            await this.verificarPath()
            listado = JSON.parse(await fs.promises.readFile(this.contenedor, 'utf-8'))
            return listado
        } catch (error) {
            throw new Error(`No se pudo leer el archivo. \n ${error.message}`)
        }
    }

    async escribirArchivo(listado) {
        try {
            await fs.promises.writeFile(this.contenedor, JSON.stringify(listado, null, '\t'))
        } catch (error) {
            throw new Error(`No se pudo escribir el archivo. \n ${error.message}`)
        }
    }



    listarTodos = async () => {
        try{
        const listado = await this.leerArchivo()

        return listado
        } catch (error){
            throw new Error(`El listado de libros tuvo un problema. /n /n ${error.message}`)
        }
    }


    aniadirColor = async (color) => {
        try{
        const listado = await this.leerArchivo()

        const colorIndex = listado.findIndex(colorListado => colorListado == color)

        let colorAniadido = null

        if (colorIndex == -1) {
            listado.push(color)
            await this.escribirArchivo(listado)
            colorAniadido = color
        }

        return colorAniadido
    } catch (error){
        throw new Error(`El listado de libros tuvo un problema. /n /n ${error.message}`)
    }
}


    deleteColor = async (color) => {
try{
    const listado = await this.leerArchivo()

    const colorIndex = listado.findIndex(colorListado => colorListado == color)

        let colorBorrado = null

    if(colorIndex != -1) {
        colorBorrado = listado.splice(colorIndex, 1)
        await this.escribirArchivo(listado)
    }

        return colorBorrado
    } catch (error){
        throw new Error(`El listado de libros tuvo un problema. /n /n ${error.message}`)
    }
}


}

export default Model_FS