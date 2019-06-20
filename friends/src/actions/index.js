import axios from 'axios';
import axiosImproved from '../axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_IN_SUCCESS = 'LOGGING_IN_SUCCESS';
export const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';
export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS';
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND_FAILURE';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATING_FRIEND_SUCCESS = 'UPDATING_FRIEND_SUCCESS';
export const UPDATING_FRIEND_FAILURE = 'UPDATING_FRIEND_FAILURE';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETING_FRIEND_SUCCESS = 'DELETING_FRIEND_SUCCESS';
export const DELETING_FRIEND_FAILURE = 'DELETING_FRIEND_FAILURE';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const SAVING_FRIENDS_SUCCESS = 'SAVING_FRIENDS_SUCCESS';
export const SAVING_FRIENDS_FAILURE = 'SAVING_FRIENDS_FAILURE';

export const fetchFriends = () => {
	return function(dispatch) {
		dispatch({ type: FETCHING });
		axiosImproved()
			.get('http://localhost:5000/api/friends')
			.then(res => {
				dispatch({ type: FETCHING_SUCCESS, payload: res.data });
			})
			.catch(error => {
				dispatch({ type: FETCHING_FAILURE, payload: error.message });
				// console.log('failed to fetch friends');
				// console.log(error.message);
			});
	};
};

export const login = (username, password) => dispatch => {
	const credentials = { username, password };

	axios
		.post('http://localhost:5000/api/login', credentials)
		.then(res => {
			// console.log('success');
			dispatch(localStorage.setItem('token', res.data.payload));
		})
		.catch(error => {
			// console.log('failed');
			// dispatch()
		});
};
