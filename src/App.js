import React, {Component} from 'react';
import connect from 'react-redux/lib/connect/connect';
import { addOne, showAll } from './actions/add';
import TodoList from './components/TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>My Todos:</h1>
                <input type="text" placeholder="todo text"
                    value={this.state.query} onChange={this.handleChange}
                />
                <button onClick={ () => this.props.dispatch(addOne(this.state.query)) }>
                    Add
                </button>
                <TodoList data={ this.props.add } />
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        add: state.add
    };
}

export default connect(mapStateToProps)(App);


