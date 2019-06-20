import * as types from '../actions';

const initialState = {
	deletingFriend: false,
	fetchingFriends: false,
	friends: [],
	loggingIn: false,
	savingFriends: false,
	updatingFriend: false,
	error: null,
};

export const getAllFriendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCHING:
			return {
				...state,
				fetchingFriends: true,
			};
		case types.FETCHING_SUCCESS:
			return {
				...state,
				friends: action.payload,
				fetchingFriends: false,
			};
		case types.FETCHING_FAILURE:
			return {
				...state,
				fetchingFriends: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
