const result = document.getElementsByClassName("div")
console.log(result)
console.log(Array.isArray(result))
console.log(typeof result)
console.log(result[0])

document.write("shiiit")

const newElement = document.createElement("div")
newElement.className = "div appended"
const bodyElement = document.querySelector("body")
bodyElement.appendChild(newElement)