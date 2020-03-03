const sortZerosAndOnes = (arr, size) => {
    var a = 0
    var b = size - 1
    while(a < b) {
        if(arr[a] === 1 ) {
            if (arr[b] === 0) {
                const x = arr[a]
                arr[a] = arr[b]
                arr[b] = x
                b--
                a++
            } else {
                b--
            }
        } else {
            a++
        }
    }
    return arr
}


const a = [1,1,0,0,0,1,1,1,1]
console.log('output is -----', sortZerosAndOnes(a, 9))