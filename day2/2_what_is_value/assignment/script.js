let email
let password1
let password2
let sex

let isEnable = false
const checkDict = {
    "email": false,
    "password": false,
    "sex": false,
}

const emailInput = document.getElementById("email")
const password1Input = document.getElementById("password1")
const password2Input = document.getElementById("password2")
const sexInputArray = document.getElementsByName("sex")

const password1Group = document.getElementById("password1Group")
const password2Group = document.getElementById("password2Group")

const yearDropbox = document.getElementById("year-dropbox")
const monthDropbox = document.getElementById("month-dropbox")
const dayDropbox = document.getElementById("day-dropbox")

const buttonIdArray = ["year-button", "month-button", "day-button"]
const dropboxArray = [yearDropbox, monthDropbox, dayDropbox]
const dropboxIdArray = dropboxArray.map((dropbox) => dropbox.id)



const submitBtn = document.getElementById("submitBtn")
const form = document.getElementById("form")

emailInput.addEventListener("keyup", function (event) {
    email = event.target.value
    console.log(email)
})
password1Input.addEventListener("keyup", function (event) {
    handlePassword1Change(event)
})

password2Input.addEventListener("keyup", function (event) {
    handlePassword2Change(event)
})

for (const sexInput of sexInputArray) {
    sexInput.addEventListener("click", function (event) {
        sex = event.target.value
        updateCheckDict("sex", true)
    })
}


function handlePassword1Change(event) {
    password1 = event.target.value

    const result = checkPassword()
    console.log("result:", result)

    const newP = document.createElement("p")
    newP.textContent = result

    if (result === "good") {
        const oldP1 = document.querySelector("#password1Group p")
        if (oldP1) {
            oldP1.remove()
        }
        const oldP2 = document.querySelector("#password2Group p")
        if (oldP2) {
            oldP2.remove()
        }
        return
    }

    if (result === "너무 짧아요") {
        const oldP = document.querySelector("#password1Group p")
        if (oldP) {
            oldP.remove()
        }
        password1Group.appendChild(newP)
    }

    if (result === "비밀번호와 같지 않아요") {
        const oldP1 = document.querySelector("#password1Group p")
        if (oldP1) {
            oldP1.remove()
        }

        const oldP2 = document.querySelector("#password2Group p")
        if (oldP2) {
            oldP2.remove()
        }
        password2Group.appendChild(newP)
    }
}

function handlePassword2Change(event) {
    password2 = event.target.value

    const result = checkPassword()
    console.log("result:", result)

    const newP = document.createElement("p")
    newP.textContent = result

    if (result === "good") {
        const oldP1 = document.querySelector("#password1Group p")
        if (oldP1) {
            oldP1.remove()
        }
        const oldP2 = document.querySelector("#password2Group p")
        if (oldP2) {
            oldP2.remove()
        }
        return
    }

    if (result === "너무 짧아요") {
        const oldP = document.querySelector("#password1Group p")
        if (oldP) {
            oldP.remove()
        }
        password1Group.appendChild(newP)
    }

    if (result === "비밀번호와 같지 않아요") {
        const oldP1 = document.querySelector("#password1Group p")
        if (oldP1) {
            oldP1.remove()
        }

        const oldP2 = document.querySelector("#password2Group p")
        if (oldP2) {
            oldP2.remove()
        }
        password2Group.appendChild(newP)
    }
}


function checkPassword() {
    if (password1 && password1.length < 8) {
        updateCheckDict("password", false)
        return "너무 짧아요"
    }

    if (!password2) {
        updateCheckDict("password", false)
        return "good"
    }

    if (password1 !== password2) {
        updateCheckDict("password", false)
        return "비밀번호와 같지 않아요"
    }

    updateCheckDict("password", true)
    console.log("PASSWORD GOOD")
    return "good"
}

function updateCheckDict(key, boolValue) {
    checkDict[key] = boolValue

    const boolArray = Object.values(checkDict)
    isEnable = boolArray.reduce((prevValue, nextValue) => prevValue || nextValue)
    console.log("---- is enable:", isEnable)
}






form.addEventListener("submit", function (event) {
    event.defaultPrevented

    email = event.target.email.value
    password1 = event.target.password1.value
    password2 = event.target.password2.value
    sex = event.target.sex.value


    const alertMsg = `
    ${email}
    ${password1}
    ${password2}
    ${sex}
    `
    console.log("here")
    alert(alertMsg)
})

document.body.addEventListener("click", function (event) {
    // console.log(event)
    const target = event.target
    updateDropbox(target)

    applySelection(target)
})

function updateDropbox(target) {
    const targetId = target.id
    if (!buttonIdArray.includes(targetId)) {
        for (const dropbox of dropboxArray) {
            dropbox.style = ""
        }
        return
    }

    const openIndex = buttonIdArray.indexOf(targetId)
    const dropbox = dropboxArray[openIndex]
    dropbox.style = "display: block;"

    const filteredButtonIdArray = buttonIdArray.filter((buttonId) => buttonId !== targetId)
    for (const buttonId of filteredButtonIdArray) {
        const closeIndex = buttonIdArray.indexOf(buttonId)
        const dropbox = dropboxArray[closeIndex]
        dropbox.style = ""
    }
}

function applySelection(target) {
    const button = target.parentNode.parentNode.parentNode.children[0]
    if (button.type !== "button") { return }
    button.textContent = `${target.textContent}${button.textContent.at(-1)}`
}