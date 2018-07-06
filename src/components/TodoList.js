import React, {Component} from 'react';
import { connect } from 'react-redux';

import ToDoItem from './ToDoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.add.map( todo =>
                <ToDoItem key={todo.id} {...todo} />
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      add: state.add
    };
  };
  
export default connect(mapStateToProps)(TodoList);
  