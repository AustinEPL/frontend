import Elementos from "/Elementos.js" 

export default class TipoInput extends Elementos{

    constructor(tag,text,id,tipo){
        super(tag,text,id)
        this.tipo=tipo
    }

    getTipo(){
        return this.tipo
    }

    setTipo(nTipo){
        this.tipo=nTipo

    }

    
}