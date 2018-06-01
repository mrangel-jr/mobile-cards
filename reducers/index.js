import { ADD_CARD, ADD_DATA } from '../actions';

function entries (state = {}, action) {
    switch (action.type) {
        case ADD_CARD:
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
