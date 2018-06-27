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
        case 'SHOW':
            return [...state]
        default:
            return state;
    }
};
