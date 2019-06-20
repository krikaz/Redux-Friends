import axios from 'axios';
import axiosImproved from '../axios';

// export const LOGIN = 'LOGIN';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const fetchFriends = () => {
	return function(dispatch) {
		axiosImproved()
			.get('http://localhost:5000/api/friends')
			.then(res => {
				dispatch({ type: FETCH_FRIENDS, payload: res.data });
			})
			.catch(error => {
				console.log('failed to fetch friends');
				console.log(error.message);
			});
	};
};

export const login = (username, password) => dispatch => {
	const credentials = { username, password };

	axios
		.post('http://localhost:5000/api/login', credentials)
		.then(res => {
			console.log('success');
			dispatch(localStorage.setItem('token', res.data.payload));
		})
		.catch(res => {
			console.log('failed');
		})
		.finally();
};
