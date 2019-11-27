export const increment = (pld) => {
    return {
        type: 'INCREMENT', //This will go check in the counter.js and perform/return the necessary data as per the action type
        payload: pld // An additional param to handle the state change based on the value supplied during dispatch call
    };
};
export const decrement = (pld) => {
    return {
        type: 'DECREMENT',
        payload: pld
    };
};