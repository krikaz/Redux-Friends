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
		case types.FETCH_FRIENDS:
			return { ...state, friends: action.payload };
		default:
			return state;
	}
};
