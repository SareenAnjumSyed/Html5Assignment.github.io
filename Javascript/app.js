
const arr = [123,345,'test','abc',890];

// const arr1 = arr.filter((num) => typeof(num) === 'number');

// const arr2 = arr.filter((num) => typeof(num) === 'string');

const arr1 = [];
const arr2 = [];

arr.map((num) => {
    if(typeof(num) === 'number') arr1.push(num)
    else arr2.push(num)
})

// arr1.push(1000)

console.log(arr1, arr2)



