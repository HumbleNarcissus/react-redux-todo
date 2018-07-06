import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/add';

const ToDoListItem = ({ dispatch, id, text }) => (
    <div>
      <h3>{text}</h3>
      <button onClick={() => {dispatch(removeTodo({ id }))}
      }>Remove</button>
    </div>
);

export default connect()(ToDoListItem);
