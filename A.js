import Elementos from "./Elementos.js" 

export default class A extends Elementos{

    constructor(tag,text,id,src){
        super(tag,text,id)
        this.src=src
    }

    getSrc(){
        return this.src
    }

    setSrc(nSrc){
        this.src=nSrc

    }

    
}