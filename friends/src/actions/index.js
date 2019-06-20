import axios from 'axios';

// export const LOGIN = 'LOGIN';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const fetchFriends = () => {
	return function(dispatch) {
		axios
			.get('http://localhost:5000/api/friends')
			.then(res => {
				dispatch({ type: FETCH_FRIENDS, payload: res.data });
			})
			.catch(error => console.log(error.message));
	};
};
