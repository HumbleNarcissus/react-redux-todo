//ADD
import uuid from 'uuid';

export const addOne = (text) => ({
    id: uuid(),
    type: 'ADD',
    text
});

//SHOW
export const showAll = () => ({
    type: 'SHOW'
});

export const removeTodo = ({id}) => ({
    type: 'REMOVE',
    id
});