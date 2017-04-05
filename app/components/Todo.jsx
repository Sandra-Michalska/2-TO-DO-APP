// render a single element in the list
var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm a');
        }

        return (
            <div className="todo-div" onClick={() => { this.props.onToggle(id); }}>
                <input type="checkbox" checked={completed}/>
                <p className="todo">{text}</p>
                <p className="todo-date">{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;
