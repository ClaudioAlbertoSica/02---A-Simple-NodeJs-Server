import fs from 'fs'

class Model_FS {
    constructor() {
        this.container = 'container.json'
    }

    async verifycarPath() {
        try {
            if (!(await Promise.resolve(fs.existsSync(this.container)))) {
                await fs.promises.writeFile(this.container, '[]', 'utf-8')
            }
        } catch (error) {
            throw new Error(`Error at FilePath verification: ${this.container} \n ${error}`)
        }
    }

    async readFile() {
        try {
            let list = []
            await this.verifycarPath()
            list = JSON.parse(await fs.promises.readFile(this.container, 'utf-8'))
            return list
        } catch (error) {
            throw new Error(`Cannot read file. \n ${error.message}`)
        }
    }

    async writeFile(list) {
        try {
            await fs.promises.writeFile(this.container, JSON.stringify(list, null, '\t'))
        } catch (error) {
            throw new Error(`Cannot write file. \n ${error.message}`)
        }
    }



    listAll = async () => {
        try{
        const list = await this.readFile()

        return list
        } catch (error){
            throw new Error(`The color list had a problem. /n /n ${error.message}`)
        }
    }


    addColor = async (color) => {
        try{
        const list = await this.readFile()

        const colorIndex = list.findIndex(colorList => colorList == color)

        let addedColor = null

        if (colorIndex == -1) {
            list.push(color)
            await this.writeFile(list)
            addedColor = color
        }

        return addedColor
    } catch (error){
        throw new Error(`The color list had a problem. /n /n ${error.message}`)
    }
}


    deleteColor = async (color) => {
try{
    const list = await this.readFile()

    const colorIndex = list.findIndex(colorList => colorList == color)

        let deletedColor = null

    if(colorIndex != -1) {
        deletedColor = list.splice(colorIndex, 1)
        await this.writeFile(list)
    }

        return deletedColor
    } catch (error){
        throw new Error(`The color list had a problem. /n /n ${error.message}`)
    }
}


}

export default Model_FS