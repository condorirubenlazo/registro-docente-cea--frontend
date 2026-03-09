async function cargarEstudiantes(){

let response = await fetch("https://TU-BACKEND.onrender.com/students")

let data = await response.json()

document.getElementById("total").innerHTML = data.length

let tabla = document.getElementById("tabla_estudiantes")

tabla.innerHTML = ""

data.forEach(est => {

tabla.innerHTML += `
<tr>
<td>${est.id}</td>
<td>${est.nombre}</td>
<td>${est.ci}</td>
<td>${est.area}</td>
</tr>
`

})

}
