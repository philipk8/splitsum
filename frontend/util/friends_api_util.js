export const fetchFriends = user_id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/friends`,
  })
);

export const fetchFriend = friend => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${friend.user_id}/friends/${friend.friend_id}`,
  })
);

export const addFriend = friend => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${friend.user_id}/friends`,
    data: {friend}
  })
);

export const removeFriend = friend => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${friend.user_id}/friends/${friend.friend_id}`
  })
);

 