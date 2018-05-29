import { RECEIVE_DATA, ADD_DATA } from '../actions';

function entries (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                    ...state,
                    ...action.data,
            };
        case ADD_DATA:
            return {
                ...state,
                ...action.data,
        };
        default:
            return state;
    }
}

export default entries;
