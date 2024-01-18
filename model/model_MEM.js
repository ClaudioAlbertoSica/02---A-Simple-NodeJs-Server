class Model_MEM{
    constructor(){
        this.container = []
    }

    listAll = () =>{

        return this.container

    }


    addColor = (color) => {

    const colorIndex = this.container.findIndex(listedColor => listedColor == color)

    let addedColor = null
    
    if(colorIndex == -1){
        this.container.push(color)
        addedColor  = color
    }

        return addedColor
    
    }


    deleteColor = (color) => {

        const colorIndex = this.container.findIndex(listedColor => listedColor == color)
    
        let deletedColor = null
        
        if(colorIndex != -1){
            deletedColor = this.container.splice(colorIndex,1)
        }
    
            return deletedColor
        
        }


}

export default Model_MEM