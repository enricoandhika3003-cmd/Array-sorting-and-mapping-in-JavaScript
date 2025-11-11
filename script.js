const num1 = [7, 43, 1, 21, 13, 31, 3]
const resultSort = num1.sort((a, b)=>a-b)
console.log(resultSort)

const reverseArray = num1.reverse()
console.log("reverse =", reverseArray)

const num2 = [3, 4, 5, 6, 7]
const result = num2.map((a, index)=>(a*9)+4)
console.log(result)

console.log(eval("1x2+3"))