const array = []
for(i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100)
    array.push(randomNumber)
}
array.sort()
console.log(array)

array.sort((a, b) => a - b)
console.log(array)