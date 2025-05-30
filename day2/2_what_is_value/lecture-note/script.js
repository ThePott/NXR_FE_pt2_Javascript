const button = document.getElementById("submit")

const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const dateOfBirthInput = document.getElementById("date-of-birth")

// button.addEventListener("click", () => showInputStatus())
// function showInputStatus() {
//     console.log(nameInput, ageInput, dateOfBirthInput)
//     console.log(nameInput.value, ageInput.value, dateOfBirthInput.value)
// }

// button.addEventListener("keyup", (event) => inputRealTimeValue(event))
// function inputRealTimeValue(event) {
//     console.log(event.target.value)
// }
// nameInput.addEventListener("keyup", (event) => inputRealTimeValue(event))
// ageInput.addEventListener("keyup", (event) => inputRealTimeValue(event))
// dateOfBirthInput.addEventListener("keyup", (event) => inputRealTimeValue(event))

//---- form ----
const form = document.getElementById("form")
// form.addEventListener("submit", function (event) {
//     event.preventDefault()
//     console.log(event.target.name.value) // value 없이는 name="name"인 input node를 가져온다
//     console.log(event.target.age.value)
//     console.log(event.target.dateofbirth.value)
// })
form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event.target.name.value) // value 없이는 name="name"인 input node를 가져온다
    console.log(event.target.age.value)
    console.log(event.target.dateofbirth.value)
})
