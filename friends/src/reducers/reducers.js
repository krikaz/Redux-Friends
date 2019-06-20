import * as types from '../actions';

const initialState = {
	loggingIn: false,
	fetchingFriends: false,
	friends: [],
	addingFriend: false,
	updatingFriend: false,
	deletingFriend: false,
	savingFriends: false,
	error: null,
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGGING_IN:
			return {
				...state,
				loggingIn: true,
			};
		case types.LOGGING_IN_SUCCESS:
			return {
				...state,
				loggingIn: false,
			};
		case types.LOGGING_IN_FAILURE:
			return {
				...state,
				loggingIn: false,
			};
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
		case types.ADDING_FRIEND:
			return {
				...state,
				addingFriend: true,
			};
		case types.ADDING_FRIEND_SUCCESS:
			return {
				...state,
				addingFriend: false,
			};
		case types.ADDING_FRIEND_FAILURE:
			return {
				...state,
				addingFriend: false,
			};
		case types.UPDATING_FRIEND:
			return {
				...state,
				updatingFriend: true,
			};
		case types.UPDATING_FRIEND_SUCCESS:
			return {
				...state,
				updatingFriend: false,
			};
		case types.UPDATING_FRIEND_FAILURE:
			return {
				...state,
				updatingFriend: false,
			};
		case types.DELETING_FRIEND:
			return {
				...state,
				deletingFriend: true,
			};
		case types.DELETING_FRIEND_SUCCESS:
			return {
				...state,
				deletingFriend: false,
			};
		case types.DELETING_FRIEND_FAILURE:
			return {
				...state,
				deletingFriend: false,
			};
		case types.SAVING_FRIENDS:
			return {
				...state,
				savingFriends: true,
			};
		case types.SAVING_FRIENDS_SUCCESS:
			return {
				...state,
				savingFriends: false,
			};
		case types.SAVING_FRIENDS_FAILURE:
			return {
				...state,
				savingFriends: false,
			};
		default:
			return state;
	}
};
