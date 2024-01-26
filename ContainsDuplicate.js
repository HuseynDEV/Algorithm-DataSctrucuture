let numbers = [1, 2, 3, 4]
// Question:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// solution 1
// Time O(n2)

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i; j < numbers.length; j++) {
//         if (numbers[i] == numbers[j]) {
//             return console.log(true)
//         }
//     }
// }



// soluiton 3 with new Set()
// Time O(n), space O(n)
const solution = () => {
    let hasSet = new Set()
    for (let num of numbers) {
        if (hasSet.has(num)) {
            return true
        }
        hasSet.add(num)
    }
    return false
}
console.log(solution())


// solution 4 with []
// Time O(n), space O(n)
let ary = []
const solution2 = () => {
    for (num of numbers) {
        if (ary.includes(num)) {
            return true
        }
        ary.push(num)
    }
    return false
}

solution2()

// solution 5 with Set
const numberSet = [...new Set(numbers)]
function solution3() {
    return numberSet.length != numbers.length
}
console.log(solution3())