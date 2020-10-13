export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = () => {
    return {
        type: ADD,
        value: 10
    }
};

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        value: val
    }
};

export const storeResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElementId: id
    }
};