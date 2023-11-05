const filterOutOdds = (...args) => {
    return args.filter(v => v % 2 === 0)
}

const findMin = (...num) => {
    /**
    return num.reduce((min, n) => {
        if(n < min) {
            min = n
        }
        return min
    }, num[0])
     */
    return Math.min(...num)
} 
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

const mergeObjects = (obj_one, obj_two) => {
    return {...obj_one, ...obj_two}
}
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs  = (arr, ...num) => {
    const double = num.map(x=> x*2)
    return [...arr, ...double]
}
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]


/**
Slice and Dice!

For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
Make sure that you are always returning a new array or object and not modifying the existing inputs.
 */

/** remove a random element in the items array
and return a new array without that item. */


const removeRandom = (items) => {
    let random = Math.floor(Math.random()*items.length)
    // return items.splice(random, 1) //mofify the orgainal items
    return [...items.slice(0, random), ...items.slice(random+1)]

}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}


/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = obj
    delete newObj[key]
    return newObj
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val}
}