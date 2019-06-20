import axios from 'axios';
import axiosImproved from '../axios';

export const LOGGING_IN = 'LOGGING_IN';
export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const SAVE_FRIENDS = 'SAVE_FRIENDS';

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
