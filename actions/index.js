export const ADD_DATA = 'ADD_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function receiveData (data) {
    return {
        type: RECEIVE_DATA,
        data,
    };
}


export function addData (data) {
    return {
        type: ADD_DATA,
        data,
    };
}
