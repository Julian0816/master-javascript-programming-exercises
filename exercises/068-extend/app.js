let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    //your code here
    for (key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            obj1[key] =  obj2[key]
        }
    }
}

// function extend(obj1, obj2) {
//     // your code here
//     Object.assign(obj1, obj2)
//     return obj1
//   }