// update state (filters, checkboxes, text inputs...)
// get todos out of local storage and add new todos
var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var Add = require('Add');
var Search = require('Search');
var List = require('List');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            search: '',
            todos: TodoAPI.getTodos()
        };
    },
    // update todos
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    // add new todos
    handleAdd: function (todoValue) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todoValue,
                    completed: false,
                    createdAt: moment().unix()
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
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    render: function () {
        var {todos, showCompleted, search} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, search);

        return (
            <div id="todo-app">
                <h1>Your To Do List</h1>
                <Add onAdd={this.handleAdd}/>
                <Search onSearch={this.handleSearch}/>
                <List todos={filteredTodos} onToggle={this.handleToggle}/>
            </div>
        );
    }
});

module.exports = TodoApp;
