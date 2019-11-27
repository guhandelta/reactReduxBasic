//Reducer => Describes how the Actions transfrom the state
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload; // Extracts the payload/value supplied during dispatch call
        case 'DECREMENT':
            return state - action.payload;
        default: // Not specifying a default case may/wil throw errors 
            return state;
    }
};

export default counterReducer;