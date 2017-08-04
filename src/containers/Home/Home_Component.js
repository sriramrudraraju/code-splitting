import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { buttonInHomeClicked } from '../../actions';

class Home extends React.Component {
  // can use destructured version of this props.. but im lazy ;)

  render() {
    return (
      <div className="container">
        <p>click the button to increment its count</p>
        <button onClick={this.props.buttonInHomeClicked}>
          Count: {this.props.home.count}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of Home
  return {
    home: state.Home_Reducer
  };
}

// Anything returned from this function will end up as props
// on the Home component
function mapDispatchToProps(dispatch) {
  // Whenever buttonInHomeClicked is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators(
    { buttonInHomeClicked: buttonInHomeClicked },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
