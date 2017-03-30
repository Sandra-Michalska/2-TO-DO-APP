// clicking the button triggers an event that adds a todo to the state
var React = require('react');

var Add = React.createClass({
    handleFormSubmit: function (e) {
        e.preventDefault();

        var todoValue = this.refs.todo.value;

        if(todoValue.length > 0) {
            this.refs.todo.value = '';
            this.props.onAdd(todoValue);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div>
                <h2>Add a new TO DO</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="todo" placeholder="Add a TO DO"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
});

module.exports = Add;
