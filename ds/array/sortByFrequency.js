const elementMap = inputArray => {
    let groupObj = {}
    let index = 0
    for (const element of inputArray) {
        if ( groupObj[element] ) {
            groupObj[element][1] = groupObj[element][1] + 1
        } else {
            groupObj[element] = [index, 1]
        }
        index++
    }
    return groupObj
}

const sortElementMapByFrequency = (obj) => {
    var arr = [];
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    sortElemntwith(arr,1)
    return arr;
}

const sortWithFrequencyAndPosition = arry => {
    let tempArray = []
    let resultArray = []
    let count;
    for (prop of obj) {
        if (count === prop.value[1]){
            tempArray.push(obj)
            sortElemntwith(tempArray, 0)
         } else {
            if(tempArray) {
                c.push(...tempArray)
            }
            tempArray = []
            count = prop.value[1];
            tempArray.push(obj)
        }
    }
    return sortElemntwith
}

const sortElemntwith = (arr,param) => {
    arr.sort((a, b)  => {
        return b.value[param] - a.value[param]
    });
    return arr
}