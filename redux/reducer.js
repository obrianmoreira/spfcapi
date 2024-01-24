import { tableState } from "./state"

const reducer = (state = tableState, action) => {
    switch(action.type) {
        case 'UPDATE_TABLE_STATE':
            return {
                ...state,
                table: action.payload,
            };
        default:
            return state;
    } 
};

export default reducer;