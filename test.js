// for (i = 0; i < 30; i++) {
//     console.log(`<li>${i + 1}</li>`)
// }

const array = [false, true, false]

const result = array.reduce((prev, next) => prev && next)
console.log(result)