// Write your function here
const getAverageOfElementsAtProperty = (obj, key) => {
    for (const prop in obj) {
        if (Array.isArray(obj[prop]) == key) {
            return obj[prop].reduce((a, b) => (a + b)) / nums.length
        }
    }
}

// function average(nums) {
//     return nums.reduce((a, b) => (a + b)) / nums.length;
// }