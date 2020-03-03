const callbackFunction = (callString, callback) => {
    let x = 2020
    process.nextTick(() => {
        callback(`${callString} ${x}`)
    })
}
let t = this
t.x = 2019
callbackFunction('hello world', (concatinatedString) => console.log(concatinatedString))
console.log('Done')