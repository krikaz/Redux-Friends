import React from 'react';

export default function Friends({friends, fetchFriends}) {
	return (
		<div>
			{friends.map(friend => (
				<div key={friend.id}>{friend.name}</div>
			))}
			<button onClick={fetchFriends}>Fetch Friends</button>
		</div>
	);
}
