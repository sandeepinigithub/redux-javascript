// imported redux 
const redux = require('redux'); 

// Created a reducer function 
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
    };
};

// Created a store and passed a reducer function 
const store = redux.createStore(counterReducer);

//Checking the present state of store
// console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// Now we need someone who subscribe the store and then we need to dispatch actions 
//store.subscribe() method need some function which redux will executed whenever the data in store chnages 
store.subscribe(counterSubscriber);

store.dispatch({type : 'increment'});