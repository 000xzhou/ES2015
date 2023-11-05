describe("#rest and speard", function() {
    it("should find the min", function() {
        expect(findMin(1,4,12,-3)).toEqual(-3)
        expect(findMin(1,-1)).toEqual(-1)
        expect(findMin(3,1)).toEqual(1)
    })
    it("should merage objects", function() {
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4})
    })
    it("should double the num and return it back in teh given array", function() {
        expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8])
        expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8])
    })
})

describe("Slice and Dice!", function() {
    it("should remove random", function() {
        let arr=[1,2,3,4]
        removeRandom(arr)
        expect(arr.length).toEqual(4)
        expect(removeRandom(arr).length).toEqual(3)

        let arr2=["hi","hey","ho"]
        removeRandom(arr2)
        expect(arr2.length).toEqual(3)
        expect(removeRandom(arr2).length).toEqual(2)
    })
    it("should return a new array with every item in array1 and array2", function() {
        expect(extend([1,2,3], [4, 5])).toEqual([1,2,3,4,5])
        expect(extend(["crazy"],["horse"])).toEqual(["crazy", "horse"])
    })
    it("should Return a new object with all the keys and values from obj and a new key/value pair", function() {
        expect(addKeyVal({'pork': 'the best', 'beef': 'yummy'}, 'chicken', 'tasty')).toEqual({'pork': 'the best', 'beef': 'yummy', 'chicken': 'tasty'})
    })
    it("should Return a new object with a key removed.", function() {
        expect(removeKey({"a":1, "b":2}, "a")).toEqual({"b":2})
    })
    it("should merage objects", function() {
        expect(combine({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4})
    })
    it("should Return a new object with all the keys and values from obj and a new key/value pair", function() {
        expect(update({'pork': 'the best', 'beef': 'yummy'}, 'chicken', 'tasty')).toEqual({'pork': 'the best', 'beef': 'yummy', 'chicken': 'tasty'})
    })
})