export const ADD_DATA = 'ADD_DATA';
export const ADD_CARD = 'ADD_CARD';

export function addCard (data) {
    return {
        type: ADD_CARD,
        data,
    };
}


export function addData (data) {
    return {
        type: ADD_DATA,
        data,
    };
}
