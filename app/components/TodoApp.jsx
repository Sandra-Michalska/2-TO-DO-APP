// has static data that gets passed to List and then to Todo
// state includes: filters, checkboxes, text inputs...
var React = require('react');

var Add = require('Add');
var Search = require('Search');
var List = require('List');
var uuid = require('uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            search: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Do sth 1',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Do sth 2',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Do sth 3',
                    completed: false
                }
            ]
        };
    },
    // add new todos
    handleAdd: function (todoValue) {
        this.setState({
            todos: [
                ...this.state.todos,   // todos = the same array it was before (static data)
                {   // a newly added todo!
                    id: uuid(),
                    text: todoValue,
                    completed: false
                }
            ]
        });
    },
    handleSearch: function (showCompleted, search) {
        this.setState({
            showCompleted: showCompleted,
            search: search.toLowerCase()
        });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <h1>TO DO APP</h1>
                <Add onAdd={this.handleAdd}/>
                <Search onSearch={this.handleSearch}/>
                <List todos={todos} onToggle={this.handleToggle}/>
            </div>
        );
    }
});

module.exports = TodoApp;
