import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { buttonInAboutClicked } from '../../actions';

class About extends React.Component {
  // can use destructured version of this props.. but im lazy ;)
  render() {
    return (
      <div className="container">
        <p>click the button to increment its count</p>
        <button onClick={this.props.buttonInAboutClicked}>
          Count: {this.props.about.count}
        </button>

        <p>
          value from home screen clicks: {this.props.home.count}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of About
  return {
    about: state.About_Reducer,
    home: state.Home_Reducer
  };
}

// Anything returned from this function will end up as props
// on the About component
function mapDispatchToProps(dispatch) {
  // Whenever buttonInHomeClicked is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators(
    { buttonInAboutClicked: buttonInAboutClicked },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
