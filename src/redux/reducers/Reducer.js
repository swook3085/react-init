import * as types from '../actions/Types';

const initialState = {
    age: 20
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AGE_UP:
            return {
                ...state,
                age: state.age + 1
            }
        case types.AGE_DOWN:
            return {
                ...state,
                age: state.age - 1
            }
        default:
            return state;
    }
    console.log(state)
};

export default reducer;