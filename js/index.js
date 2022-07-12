alert("Hola, en este ejercicio calcularemos cuantas pastillas debes comprar")

let horaToma = parseInt(prompt("¿Cada cuantas horas debes tomar la pastilla?"))
let dias = parseInt(prompt("¿Por cuantos días debes tomar la pastilla?"))

let pastillasDiarias = parseInt("0")
let pastillas =" pastillas"
let pastillasTotales = parseInt("0")

while (isNaN(horaToma) || isNaN(dias)) {
    alert("Por favor escriba un valor numérico")
    horaToma = parseInt(prompt("¿Cada cuantas horas debes tomar la pastilla?"))
    dias = parseInt(prompt("¿Por cuantos días debes tomar la pastilla?"))
}

pastillasDiarias = parseInt(24 / horaToma)
pastillasTotales = pastillasDiarias * dias
pastillasTotales = pastillasTotales+pastillas

alert("Debes comprar "+pastillasTotales)


console.log(pastillasDiarias)
console.log (dias)
console.log(pastillasTotales)
