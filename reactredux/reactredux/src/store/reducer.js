const initState = {
    age : 21
}

const reducer = (state = initState, action) => {
    const newState = { ...state};

    if(action.type === 'AgeUp') {
        console.log("=======>",newState.age)
        newState.age++;
    } 

    if(action.type === 'AgeDown') {
        newState.age--;
        console.log("========>",newState.age)
    }
    return newState;
}

export default reducer;