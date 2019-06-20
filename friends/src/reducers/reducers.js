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

export const friendsReducer = (state = initialState, action) => {
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
		case types.LOGGING_IN:
			return {
				...state,
				fetchingFriends: true,
			};
		case types.ADD_FRIEND:
			return {
				...state,
				fetchingFriends: true,
			};
		case types.UPDATE_FRIEND:
			return {
				...state,
				fetchingFriends: true,
			};
		case types.DELETE_FRIEND:
			return {
				...state,
				fetchingFriends: true,
			};
		case types.SAVE_FRIENDS:
			return {
				...state,
				fetchingFriends: true,
			};
		default:
			return state;
	}
};
