// this component renders a single element in the list and handles interactions (clicking the checkbox)
// knows how to properly render itself whether it's completed or not
var React = require('react');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed} = this.props;

        return (
            <div onClick={() => { this.props.onToggle(id); }}>
                <input type="checkbox" checked={completed}/>
                {id}. {text}
            </div>
        );
    }
});

module.exports = Todo;
