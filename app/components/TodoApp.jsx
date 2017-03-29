// app that persists data and lets you access it from anywhere
// container component; maintains state
// state includes: filters (search), checkboxes, text inputs...

// has static data that gets passed to List and then to Todo
var React = require('react');

var Add = require('Add');
var Search = require('Search');
var List = require('List');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            // initial values!
            showCompleted: false,
            search: '',
            // an array of objects
            todos: [
                {
                    id: 1,
                    text: 'Do sth 1'
                },
                {
                    id: 2,
                    text: 'Do sth 2'
                },
                {
                    id: 3,
                    text: 'Do sth 3'
                }
            ]
            /* BEFORE:
                todo: this.props.todo */
            // there will be an empty array first
        };
    },
    /*getDefaultProps: function () {
        return {
			todos: 'no TO DOs yet'
		};
    },*/
    // listen for new todo items being created; add new todos when the fct gets called
    handleAdd: function (todoValue) {

        alert('new todo: ' + todoValue);
        /*this.setState({
            todos: todoValue
        });*/
    },
    handleSearch: function (showCompleted, search) {
        this.setState({
            showCompleted: showCompleted,
            search: search.toLowerCase()
        });
    },
    render: function () {
        // var todos = this.state.todos;
        var {todos} = this.state;

        return (
            <div>
                <h1>TO DO APP</h1>
                <Add onAdd={this.handleAdd}/>
                <Search onSearch={this.handleSearch}/>
                <List todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;
