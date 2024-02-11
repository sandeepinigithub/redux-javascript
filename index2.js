const { configureStore } = require('@reduxjs/toolkit');

// Define initial state
const initialCounterState = {
    value: 0,
};

// Define actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Define reducers
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};

// Create store
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(increment())
// {value: 1}
store.dispatch(increment())
// {value: 2}
store.dispatch(decrement())
// {value: 1}
