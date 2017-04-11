// render the TodoApp component
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
