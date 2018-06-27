import React, {Component} from 'react';

const TodoList = (props) => {
    return (
        <div>
            {props.data.map( item => 
                <p key={item.id}>{item.text}</p>      
            )}
        </div>
    )
};

export default TodoList;