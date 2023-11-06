// Quick Question #1-#3
// What does the following code return?
new Set([1,1,2,2,3,4])
// [1.2.3.4]

// What does the following code return?
const x = [...new Set("referee")].join("")
// ref

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Map(2) {Array(3) => true, Array(3) => false}
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => {
    return set(arr).size !== arr.length
}
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = (string) => {
    let strMap = new Map()
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let str = string.toLowerCase()
    for(let x of str) {
        if(vowels.has(x)) {
            if(strMap.has(x)) {
                strMap.set(x, strMap.get(x)+1)
            } else {
                strMap.set(x, 1)
            }   
        } 
    }
    return strMap
}
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }