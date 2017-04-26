// add a todo to the list
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Add = React.createClass({
    handleFormSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var todoValue = this.refs.todo.value;

        if(todoValue.length > 0) {
            this.refs.todo.value = '';
            dispatch(actions.addTodo(todoValue));
        } else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div className="presentational-components">
                <h2>Add a To Do</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="todo" placeholder="Your new to do"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
});

module.exports = connect()(Add);
