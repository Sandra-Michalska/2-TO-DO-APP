// app that persists data and lets you access it from anywhere
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
