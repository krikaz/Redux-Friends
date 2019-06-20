import * as types from '../actions/actionTypes';


const initialState = {
	friends: [],
};

export const getAllFriendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_FRIENDS:
			return { ...state, friends: action.payload };
		default:
			return state;
	}
};
