const { createStore } = require('redux')


const initStore = {
    age: 1
}
const myReducer = (state = initStore, action) => {
    const newState = {...state}
    if(action.type === 'ageUp') {
        newState.age += action.param; 
    }

    if(action.type === 'ageDown') {
        newState.age -= action.param; 
    }

    return newState;
}

const store = createStore(myReducer);

store.dispatch({type: 'ageUp', param : 10}); 
console.log(JSON.stringify(store.getState()));  
store.dispatch({type: 'ageDown', param: 5});

console.log(JSON.stringify(store.getState()));
