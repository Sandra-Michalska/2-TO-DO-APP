// a list of data (of Todo components) - a separate component
// renders all to dos that get passed down
// knows how to render a list of todos that it gets passed as props

// clicking the button will trigger an event that goes to the container and there a to do is added to the state

// iterate over the list creating a new todo for every item in the array
// return an array of jsx

var React = require('react');

var Todo = require('Todo');

var List = React.createClass({
    render: function() {
        // var todos = this.props.todos;
        var {todos} = this.props;

        // a fct to iterate over the list and return an array of jsx
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/> // spread operator
                );
            });
        };

        return (
            <div>
                <h2>List of TODOs</h2>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = List;

/* RENDERING LISTS
a list of nodes (todo items) to edit

*/
