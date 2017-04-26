// respond to user input and pass it to the container which filters todos
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Search = React.createClass({
    render: function() {
        var {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="presentational-components">
                <h2>Your To Dos</h2>
                <div>
                    <input type="search" ref="search" placeholder="Search your to dos" value={searchText} onChange={() => {
                            var searchText = this.refs.search.value;
                            dispatch(actions.setSearchText(searchText));
                        }}/>
                </div>
                <div>
                    <input type="checkbox" ref="showCompleted" checked={showCompleted} id="checkbox-completed" onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                    <label htmlFor="checkbox-completed" id="show-completed">Show completed to dos</label>
                </div>
            </div>
        );
    }
});

module.exports = connect((state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
})(Search);
