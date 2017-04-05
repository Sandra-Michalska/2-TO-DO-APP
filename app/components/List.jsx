// return a list of todos
var React = require('react');

var Todo = require('Todo');

var List = React.createClass({
    render: function() {
        var {todos} = this.props;

        // iterate over the list and return an array of Todos
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };

        return (
            <div>
                <h2 className="color3">List of TODOs</h2>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = List;
