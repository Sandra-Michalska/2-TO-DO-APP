// this components returns a list of todos that gets passed as props
var React = require('react');

var Todo = require('Todo');

var List = React.createClass({
    render: function() {
        var {todos} = this.props;

        // a fct to iterate over the list and return an array of jsx (Todos)
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
