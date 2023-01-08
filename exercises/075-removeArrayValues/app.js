function removeArrayValues(obj) {
    // your code here
    for (const prop in obj) {
        if(Array.isArray(obj[prop])) {
            delete obj[prop]
        }
    }
    return obj
}