const binarySearch = (arr, low, high, key) => {
    
    if(high < low)
        return -1

    let mid = (low + high) / 2

    if(arr[mid] == key)
        return mid
        
    if(arr[mid] < key )
        return binarySearch(arr, mid +1, high, key)
    else
        return binarySearch(arr, low, mid-1, key)

}

const arr = [1,3,5,7,9,10]
const searchKey = 9
console.log(binarySearch(arr, 0, arr.length -1, 9))