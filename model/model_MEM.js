class Model_MEM{
    constructor(){
        this.contenedor = []
    }

    listarTodos = () =>{

        return this.contenedor

    }


    aniadirColor = (color) => {

    const colorIndex = this.contenedor.findIndex(colorListado => colorListado == color)

    let colorAniadido = null
    
    if(colorIndex == -1){
        this.contenedor.push(color)
        colorAniadido  = color
    }

        return colorAniadido
    
    }


    deleteColor = (color) => {

        const colorIndex = this.contenedor.findIndex(colorListado => colorListado == color)
    
        let colorBorrado = null
        
        if(colorIndex != -1){
            colorBorrado = this.contenedor.splice(colorIndex,1)
        }
    
            return colorBorrado
        
        }


}

export default Model_MEM