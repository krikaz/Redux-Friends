import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from './actions';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<button />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		friends: state.getAllFriendsReducer.friends,
	};
}

export default connect (
  mapStateToProps,
  actionsCreators
)(App);
