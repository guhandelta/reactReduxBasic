//Reducer => Describes how the Actions transfrom the state
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: // Not specifying a default case may/wil throw errors 
            return state;
    }
};

export default counterReducer;