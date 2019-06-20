import React from 'react';

export default function Friends(props) {
	console.log(props.fetchFriends);
	return <button onClick={props.fetchFriends}>Fetch Friends</button>;
}
