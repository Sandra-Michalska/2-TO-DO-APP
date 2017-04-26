// render the TodoApp component
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
require('style!css!sass!applicationStyles');

var actions = require('actions');
var store = require('configureStore').configure();

// Subscribe to changes
store.subscribe(() => {
    console.log('New state:', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
