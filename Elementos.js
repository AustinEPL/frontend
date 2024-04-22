
export default class Elementos{

    constructor(tag,text,id){
        this.tag=tag
     //   this.tipo=tipo
        this.text=text
        this.id=id
       // this.ruta=ruta


        
    }

    getTag(){
        return this.tag
    }
    getText(){
        return this.text
    }
    getId(){
        return this.id=id
    }
    /*
    getTipo(){
        return this.tipo
    }
   
    getRuta(){
        return this.ruta
    }
*/
    setTag(nTag){
        this.tag=nTag
    }
    setText(nText){
        this.text=nText
    }
    setId(nId){
        this.id=nId

    }
    /*
    setTipo(nTipo){
        this.tipo=nTipo
    }
    
    setRuta(nRuta){
        this.ruta=nRuta
    }*/
        
   
}