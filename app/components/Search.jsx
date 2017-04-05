// respond to user input and pass it to the container which filters todos
var React = require('react');

var Search = React.createClass({
    handleSearch: function () {
        var search = this.refs.search.value;
        var showCompleted = this.refs.showCompleted.checked;

        this.props.onSearch(showCompleted, search);
    },
    render: function() {
        return (
            <div className="presentational-components">
                <h2>Your To Dos</h2>
                <div>
                    <input type="search" ref="search" placeholder="Search your to dos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" ref="showCompleted" id="checkbox-completed" onChange={this.handleSearch}/>
                    <label htmlFor="checkbox-completed" id="show-completed">Show completed to dos</label>
                </div>
            </div>
        );
    }
});

module.exports = Search;
