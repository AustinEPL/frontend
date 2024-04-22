import Elementos from "./Elementos.js"
import TipoInput from "./TipoInput.js"
import Imagen from "./Imagen.js"
import A from "./A.js"




let elementos = []


let opciones = document.getElementById("opciones")
opciones.addEventListener("change", e => {
    let target = e.target
    let input = target.value.split(" ")
    var inp = document.getElementById("lblTexto").querySelector("input");
    let inputID= document.getElementById("lblId").querySelector("input")

    console.log(input[0])
    //if(input=="")

    if (input[0] == "input") {
        document.getElementById("lblTexto").textContent = "Placeholder"
        document.getElementById("lblId").textContent = "Id"

    } else if (input[0] == "img") {
        document.getElementById("lblTexto").textContent = "Ruta"
        document.getElementById("lblId").textContent = "Id"

    } else if(input[0] == "a"){
        document.getElementById("lblId").textContent = "enlace"
       // document.getElementById("lblId").textContent = "Id"

       
       // document.getElementById("lblId").appendChild(inputID)


    }
    else {
        document.getElementById("lblTexto").textContent = "Texto"
        document.getElementById("lblId").textContent = "Id"

       


    }
    

    document.getElementById("lblTexto").appendChild(inp);
    document.getElementById("lblId").appendChild(inputID)


})

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
                limpiarCampos()

                break
            case "number":
                añadirElementoInput(new TipoInput(input[0], target.text.value, target.id.value, input[1]))
                limpiarCampos()

                break;
            case "password":
                añadirElementoInput(new TipoInput(input[0], target.text.value, target.id.value, input[1]))
                limpiarCampos()
                break;


        }
    } else if (target.opciones.value == "Seleccione") {
        alert("Seleccione un elemento html")
        limpiarCampos()
        return

    } else if (target.opciones.value == "img") {
        añadirElementoimg(new Imagen(target.opciones.value, "", target.id.value, target.text.value))
        limpiarCampos()
    }else if(target.opciones.value == "a"){
        añadirElementoA(new A(target.opciones.value,target.text.value,"", target.id.value ))
        limpiarCampos()
    }
    else {
        AñadirElementoBase(new Elementos(target.opciones.value, target.text.value, target.id.value))
        limpiarCampos()

    }

  




})

function AñadirElementoBase(Elemento) {
    let box = document.getElementById("elementosCreados")

    let n = Elemento
    let hijo = document.createElement(n.tag)
    hijo.appendChild(document.createTextNode(n.text))
    // document.body.appendChild(hijo)
    box.appendChild(hijo)


}

function añadirElementoInput(Input) {
    let box = document.getElementById("elementosCreados")

    let inp = Input
    let hijo = document.createElement(inp.tag)
    hijo.setAttribute("type", inp.tipo)
    hijo.setAttribute("placeholder", inp.text)

    // document.body.appendChild(hijo)
    box.appendChild(hijo)

}

function añadirElementoimg(Imagen) {
    let box = document.getElementById("elementosCreados")

    let inp = Imagen
    let hijo = document.createElement(inp.tag)
    hijo.setAttribute("src", inp.ruta)
    hijo.setAttribute("alt", inp.text)

    //hijo.appendChild(document.createTextNode(inp.text))
    // document.body.appendChild(hijo)
    box.appendChild(hijo)

}
function añadirElementoA(A) {
    let box = document.getElementById("elementosCreados")

    let inp = A
    let hijo = document.createElement(inp.tag)
    hijo.setAttribute("href", inp.src)
    hijo.setAttribute("target", "_blank")

    hijo.appendChild(document.createTextNode(inp.text))


    //hijo.appendChild(document.createTextNode(inp.text))
    // document.body.appendChild(hijo)
    box.appendChild(hijo)

}


function limpiarCampos() {
    document.getElementById("text").value = ""
    document.getElementById("id").value = ""


}