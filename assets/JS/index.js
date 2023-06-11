const carne = document.getElementById("carne");
const pollo = document.getElementById("pollo");
const tocino = document.getElementById("tocino");
const mozarella = document.getElementById("mozarella");
const champiñon = document.getElementById("champiñon");
const cebolla = document.getElementById("cebolla");
const piña = document.getElementById("piña");
const pimenton = document.getElementById("pimenton")
//
const cajonIngredientes = document.getElementById("ingredientesSeleccionados")
const cajonExtras = document.getElementById("ingredientesExtra")
//
const precioIngredientesExtra = document.getElementById("precioIngredientesExtra")
const inputPropina = document.getElementById("inputPropina")
const propina = document.getElementById("propina")
const enviarPropina = document.getElementById("enviarPropina")

const ingredientes = [carne, pollo, tocino, mozarella, champiñon, cebolla, piña, pimenton]

const ingredientesSeleccionados = []

for (const ing of ingredientes) {
    ing.addEventListener("change", sortear)
    function sortear() {
        (ing.checked) ? ingredientesSeleccionados.push(ing.value) : ingredientesSeleccionados.splice((ingredientesSeleccionados.indexOf(ing.value)), 1)
        mostrar(...ingredientesSeleccionados)
}
}   

function mostrar() {
    cajonIngredientes.innerHTML = ""
    cajonExtras.innerHTML = ""
    cajonIngredientes.innerHTML = ingredientesSeleccionados.join(', ')
    ingExtras = ingredientesSeleccionados.slice(3, ingredientesSeleccionados.length)
    cajonExtras.innerHTML = ingExtras.join(", ")
    let precioExtras = ingExtras.length * 800
    if (precioExtras != 0){
        precioIngredientesExtra.innerHTML = `$${precioExtras}`
    }
}

// Propina

let PropinaFinal = 0

inputPropina.addEventListener("click", propinaAuto)

function propinaAuto() {
    PropinaFinal = 1000
    propina.innerHTML = "$1000"
    console.log(PropinaFinal);
}

inputPropina.addEventListener("change", propinaPrecisa)

function propinaPrecisa() {
    let propinaElegida = inputPropina.value
    PropinaFinal = Number(propinaElegida)
    propina.innerHTML = `$${PropinaFinal}`
    console.log(PropinaFinal);
}

enviarPropina.addEventListener("click", mensaje)

function mensaje() {
    if (PropinaFinal == 0) {
        alert("Aún no ha definido una propina")
    } else {
        alert(`Su propina de $${PropinaFinal} ha sido enviada`)
    }
}