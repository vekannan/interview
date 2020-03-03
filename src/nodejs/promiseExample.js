const returnPromiseDelay = (seconds) => new Promise((resolves,rejects) => {
    console.log(seconds)
    if(seconds < 5) {
        setTimeout( () => {
            resolves('Call Back with String param')
        }, seconds * 1000)
    } else {
        rejects(`Given ${sconds} is too long`)
    }
})

returnPromiseDelay(process.argv.slice(2)[0])
    .then( (message) => {
        console.log(message)
        return {
            "name": "venkat",
            "age": "35"
        }
    }).then((object) => {
        console.log(`Name: ${object.name} and Age: ${object.age}`)
    }).catch((error) => console.log(error))