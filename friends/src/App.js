import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from './actions';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Friends from './components/Friends';
import Login from './components/Login';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route
					exact
					path="/"
					render={props => {
						if (true) {
							return <Friends props={props} />;
						}
						return <Redirect to="login" />;
					}}
				/>
				<Route path="/login" component={Login} />
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state) {
	return {
		friends: state.getAllFriendsReducer.friends,
	};
}

export default connect(
	mapStateToProps,
	actionsCreators
)(App);
