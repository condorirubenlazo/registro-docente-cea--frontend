async function registrarNota(){

let student = document.getElementById("student_id").value
let subject = document.getElementById("materia").value
let module = document.getElementById("modulo").value
let nota = document.getElementById("nota").value

await fetch("https://TU-BACKEND.onrender.com/grades",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
student_id:student,
subject_id:subject,
module_id:module,
nota:nota
})

})

alert("Nota registrada")

}
