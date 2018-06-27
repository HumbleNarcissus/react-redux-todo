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