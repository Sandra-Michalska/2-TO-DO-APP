// return a list of todos
var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var List = React.createClass({
    render: function() {
        var {todos} = this.props;

        // iterate over the list and return an array of Todos
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div className="presentational-components" id="list-component">
                {renderTodos()}
            </div>
        );
    }
});

// connect the List component to the Provider
module.exports = connect((state) => {
    return {
        todos: state.todos
    }
})(List);
