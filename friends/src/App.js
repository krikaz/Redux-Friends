import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from './actions';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// import Friends from './components/Friends';
import Login from './components/Login';

class App extends React.Component {
	render() {
		const friends = this.props.friends;
		return (
			<BrowserRouter>
				<Route
					exact
					path="/"
					render={() => {
						if (localStorage.getItem('token')) {
							return (
								<div>
									{friends.map(friend => (
										<div key={friend.id}>{friend.name}</div>
									))}
									<button onClick={this.props.fetchFriends}>
										Fetch Friends
									</button>
								</div>
							);
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
