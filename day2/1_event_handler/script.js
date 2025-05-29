// firstBtn.addEventListener("click", function () { console.log("do this") }) // 이 표현이 제일 좋아보이는데
// button.addEventListener("click", () => { return  console.log("do this") })
// button.addEventListener("click", () => console.log("do this"))

// secondBtn.addEventListener("click", function (event) {
//     console.log("---- here ")
//     const id = event.target.id
//     const child = createChildFrom(id)
//     const newP = document.createElement("p")
//     newP.appendChild(child)
//     document.body.appendChild(newP)
// })
// secondBtn.addEventListener("click", function (event) {
//     clickHandler(event)
// })
const strongBtn = document.getElementById("strong-btn") // 실패하면 null 받음
const markBtn = document.getElementById("mark-btn")
strongBtn.addEventListener("click", (event) => clickHandler(event))
markBtn.addEventListener("click", (event) => clickHandler(event))

function clickHandler(event) {
    const id = event.target.id
    const child = createChildFrom(id)
    const newP = document.createElement("p")
    newP.appendChild(child)
    document.body.appendChild(newP)
}

function createChildFrom(id) {
    console.log("---- id:", id)
    if (id === "strong-btn") {
        console.log("----here1")
        const newStrong = document.createElement("strong")
        newStrong.textContent = "I'M STRONG"
        return newStrong
    }

    console.log("----here2")
    const newMark = document.createElement("mark")
    newMark.textContent = "I'M MARK"
    return newMark
}