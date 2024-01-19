import Model from '../model/model_MEM.js'
//import Model from '../model/model_FS.js'

//The idea of the previous 2 imports is that one remains comented, while the other one remains active.
//They define if the model to be use will be Memory (non persistet one) or File system (words/colors are stored in a file in the computer)

class Service{
    constructor(){
        this.model = new Model()
    }

    salute = () => {

        const currentTime = new Date().toLocaleTimeString()

        if( currentTime < '06:00:00'){
            return `Good night!`
        } else if (currentTime < '13:00:00')  {
            return `Good morning!`
        } else if (currentTime < '20:00:00') {
            return `Good afternoon!`
        } else {
            return `Good night!`
        }

    }


    listAll = async () => {
        try{
    const list = await this.model.listAll() 

    return list

    } catch(error){
        throw(error)
    }
}


addColor = async (color) => {
try{
    let addedColor = await this.model.addColor(color)

    if(! addedColor){
        addedColor = `The color you are trying to add, already exists within our list`
    }

    return addedColor

} catch(error){
    throw(error)
}
    }


    deleteColor = async (color) => {
try{ 
        let deletedColor = await this.model.deleteColor(color)
    
        if(! deletedColor){
            deletedColor = `The color you are trying to delete doest not exists within our list`
        }
    
        return deletedColor
    
    } catch(error){
        throw(error)
    }
        }


}

export default Service