//https://codeburst.io/the-es6-promises-87a979ab27e4
const isSmallThenTen = (num) => {
    return new Promise((resolve, reject) => {
        if(num < 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isSmallThenTen(9)
    .then(res => console.log('The number is smaller then 10'))
    .catch(err => console.log('The number is not smaller then 10'))

// Antoher Example
const timeoutIn = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), time)
    })
}
timeoutIn(2000)
    .then(res => console.log(`Resloved in ${res/1000} seconds`))

//Promise all
const timeoutIn = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), time)
    })
}
const timeoutInArr = [
    timeoutIn(2000),
    timeoutIn(4000),
    timeoutIn(8000)
]
Promise.all(timeoutInArr)
    .then(values => {
        console.log('All the promises are resolved now you can run your code', values
        // your code
    })
