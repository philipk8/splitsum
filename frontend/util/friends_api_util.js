export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const addFriend = friend => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${friend.user_id}/friends`,
    data: {friend}
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

 