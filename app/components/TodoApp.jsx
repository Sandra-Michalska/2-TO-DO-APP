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
            searchText: '',
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
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div id="todo-app">
                <h1>Your To Do List</h1>
                <Add onAdd={this.handleAdd}/>
                <Search onSearch={this.handleSearch}/>
                <List/>
            </div>
        );
    }
});

module.exports = TodoApp;
