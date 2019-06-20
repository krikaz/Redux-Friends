import * as types from '../actions';

const initialState = {
	friends: [],
};

export const getAllFriendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_FRIENDS:
			return { ...state, friends: action.payload };
		default:
			return state;
	}
};
