import Elementos from "./Elementos.js" 

export default class Imagen extends Elementos{

    constructor(tag,text,id,ruta){
        super(tag,text,id)
        this.ruta=ruta

    }

    getRuta(){
        return this.ruta
    }

    setRuta(nRuta){
        this.ruta=nRuta

    }

    
}