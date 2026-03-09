async function verNotas(){

let student = document.getElementById("student_id").value
let subject = document.getElementById("materia").value

let response = await fetch(
"https://TU-BACKEND.onrender.com/average/"+student+"/"+subject
)

let data = await response.json()

document.getElementById("resultado").innerHTML =
"Promedio: "+data.promedio+" Estado: "+data.estado

}
