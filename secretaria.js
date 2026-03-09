async function registrar(){

let nombre = document.getElementById("nombre").value
let ci = document.getElementById("ci").value
let area = document.getElementById("area").value

await fetch("https://TU-BACKEND.onrender.com/students",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
nombre:nombre,
ci:ci,
area:area
})

})

alert("Estudiante registrado")

}
