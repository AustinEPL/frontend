import Elementos from "/Elementos.js"
import TipoInput from "/TipoInput.js"


let elementos = []

let form = document.getElementById("formulario")
form.addEventListener("submit", e => {

    e.preventDefault()
    let target = e.target

    let input = target.opciones.value.split(" ")
    console.log(input[0])

    if (input[0] == "input") {

        switch (input[1]) {
            case "text":
                añadirElementoInput(new TipoInput(input[0], target.text.value, target.id.value, input[1]))
               console.log("text")
                break
            case "number":
                añadirElementoInput(new TipoInput(input[0], target.text.value, target.id.value, input[1]))
               console.log("number")
                
                break;
            case "password":
                añadirElementoInput(new TipoInput(input[0], target.text.value, target.id.value, input[1]))
                console.log("pass")
            
                break

        }
    } else {
        AñadirElementoBase(new Elementos(target.opciones.value, target.text.value, target.id.value))
    }

    function AñadirElementoBase(Elemento) {
        let n = Elemento

        let hijo = document.createElement(n.tag)
        hijo.appendChild(document.createTextNode(n.text))
        document.body.appendChild(hijo)

    }

    function añadirElementoInput(Input) {
        let inp = Input
        let hijo = document.createElement(inp.tag)
        hijo.setAttribute("type", inp.tipo)
        hijo.setAttribute("value", inp.text)

        //hijo.appendChild(document.createTextNode(inp.text))
        document.body.appendChild(hijo)

    }


    /*
        let n = new Elementos(target.opciones.value, target.text.value)
    
        let tI = new TipoInput()
    
        let hijo = document.createElement(n.tag)
        hijo.appendChild(document.createTextNode(n.text))
        document.body.appendChild(hijo)
    
        target.text.value = ""
    
    */





})



function nuevo() {
    let nuevo = document.getElementById("tipo").value
    let texto = document.getElementById("text").value
    let nNodo = document.createElement(nuevo)

    let nodoTexto = document.createTextNode(texto)


    nNodo.appendChild(nodoTexto)
    document.body.appendChild(nNodo)
}