// clicking the button will trigger an event that goes to the container and there a to do is added to the state

// toggle the list of todos

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
