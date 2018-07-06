//add reducer

const addReducerState = [];

export default (state = addReducerState, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};
