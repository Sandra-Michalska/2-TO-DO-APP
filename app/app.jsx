// render the TodoApp component
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');
require('style!css!sass!applicationStyles');

var actions = require('actions');
var store = require('configureStore').configure();

// Subscribe to changes
store.subscribe(() => {
    console.log('New state:', store.getState());
});

// Dispatch actions
store.dispatch(actions.addTodo('Clean the house'));
store.dispatch(actions.setSearchText('house'));
store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
