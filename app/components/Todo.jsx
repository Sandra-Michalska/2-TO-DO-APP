// this component knows how to handle interactions (clicking the checkbox)
// knows how to properly render itself whether it's completed or not

// List - knows how to render a list of todos that it gets passed as props
// Todo - knows how to render a single element in the list

var React = require('react');

var Todo = React.createClass({
    render: function() {
        // var todos = this.props.todos;
        var {text, id} = this.props; // <Todo key={todo.id} {...todo}/>  <- todo = arg of map; spread operator -> text and id

        return (
            <div>
                {id}. {text}
            </div>
        );
    }
});

module.exports = Todo;
