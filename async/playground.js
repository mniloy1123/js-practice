// * Promise either resolved (success) or rejected (fail)

// * Promise object takes in one parameter which is a function that gets passed two params
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
}) 

// take a method. in this case, single param because we're passing in single param in 
// resolve (resolve('Success'))
// ! then is gonna get called if promise resolved successfully
// ! catch is gonna get called if promise fails or gets rejected
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})