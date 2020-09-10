var React = require('react');
var createReactClass = require('create-react-class');

var Main =createReactClass({

    render: function () {
	return (
	    <div>
		{this.props.children}
	    </div>
	)
    }
});

module.exports = Main;
