var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function puke (object) {
    return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

function Results (props) {
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;

    var winnerStr = "Winner";
    var loserStr = "Loser";
    var tiedStr = "Tied!"

    if (props.scores[0] === props.scores[1]) {
	winnerStr = loserStr = tiedStr;
    }
    
    return (
	<div className="jumbotron col-sm-12 text-center"
	    style={styles.transparentBg}>
	    <h1>Results</h1>
	    <div className="col-sm-8 col-sm-offset-2">
		<UserDetailsWrapper header={winnerStr}>
		    <UserDetails score={props.scores[winningIndex]}
	                    info={props.playersInfo[winningIndex]} />
		</UserDetailsWrapper>
		<UserDetailsWrapper header={loserStr}>
		    <UserDetails score={props.scores[losingIndex]}
			    info={props.playersInfo[losingIndex]} />
		</UserDetailsWrapper>
	    </div>
	    <div className="col-sm-12" style={styles.space}>
		<Link to="/playerOne">
		    <button type="button" className="btn btn-lg btn-danger">
			Start Over
		    </button>
	        </Link>
	    </div>
	</div>
		
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playersInfo: PropTypes.array.isRequired,
}

module.exports = Results;
