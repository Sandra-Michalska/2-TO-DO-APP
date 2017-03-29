// presentational component
// responds to user input and passes it to the container
// the container filters TO DOs

// listen for changes
var React = require('react');

var Search = React.createClass({
    handleSearch: function () {
        var search = this.refs.search.value;
        var showCompleted = this.refs.showCompleted.checked;

        this.props.onSearch(showCompleted, search);
    },
    render: function() {
        // search and onChange attributes
        return (
            <div>
                <h2>Search your TO DOs!</h2>
                <div>
                    <input type="search" ref="search" placeholder="Search TO DOs" onChange={this.handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" ref="showCompleted" id="checkbox-completed" onChange={this.handleSearch}/>
                    <label htmlFor="checkbox-completed">Show completed TO DOs</label>
                </div>
            </div>
        );
    }
});

module.exports = Search;
