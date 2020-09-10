var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var createReactClass = require('create-react-class');

var Home = createReactClass({
    render: function () {
	return (
	    <div className='jumbotron col-sm-12 text-center'
	        style={transparentBg}>
		<h1>Github Battle</h1>
		<p className='lead'>Learning React - rnkdev</p>
		<Link to='/playerOne'>
		    <button type='button' className='btn btn-lg btn-success'>
			Begin
		    </button>
	        </Link>
	    </div>
	)
    }
});

module.exports = Home;
