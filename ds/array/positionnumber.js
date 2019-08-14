// Arrange arry in a such a way its values posisioned 
// to it corresponding value

const arrangeArray = (inputArray) => {
    console.log('Start arrangements');
    for( let i = 0; i < inputArray.length;  i++) {
        // loop through array
        if (inputArray[i] != -1 && inputArray[i] != i) {
            let x = inputArray[i];
            while(inputArray[x] != -1 && inputArray[x] != x){
                const y = inputArray[x];
                inputArray[x] = x;
                x = y;
            }
            inputArray[x] = x
            if (inputArray[i] != i) {
                inputArray[i] = -1; 
            } 
        }
    }
    console.log(inputArray)
}

let arr = [-1,1,4,2,0]
arrangeArray(arr)