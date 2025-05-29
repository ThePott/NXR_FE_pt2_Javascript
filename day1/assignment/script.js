
// const는 선언과 실행에 차이가 없어야 하므로 prompt 불가능
let promptValue = window.prompt("공격력을 입력하세요 (양의 정수)")
console.log("---- prompt", promptValue)

const damage = Number(promptValue)
attack(damage)

function attack(damage) {
    console.log("---- start attack")
    const result = validate(damage)
    if (!result) { 
        console.log("---- invalid")
        return 
    }

    addText("괴물이 나타났어요!", true)

    let health = 100
    while (health > 0) {
        if (health === 100) {
            addText("몬스터의 체력은 100입니다.")
        }
        addText("공격!")

        const remainingHealth = health - damage

        if (remainingHealth < 0) {
            health = 0
        } else {
            health = remainingHealth
        }

        addText(`몬스터의 남은 체력은 ${remainingHealth}입니다.`)
        console.log("looping")
    }

    addText(`승리!`)
}
console.log("---- done")

function validate(damage) {
    if (typeof damage !== "number") {
        alert("Invalid damage value")
        return false
    }
    if (damage <= 0) {
        alert("Attack must be positive")
        return false
    }
    if (damage !== parseInt(damage)) {
        alert("Integer, boy, integer.")
        return false
    }
    if (damage > 100) {
        alert("Whoa whoa come down")
        return false
    }
    return true
}

function addText(text, isForTitle) {
    const newP = isForTitle ? document.createElement("h1") : document.createElement("p")
    newP.textContent = text
    result = document.body.appendChild(newP) //잘못된 걸 집어넣으면 어떻게 될까? / 노드가 아니라 에러 난다.
    // console.result("----null appended:", result)
    return true
}