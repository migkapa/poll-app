export const RECEIVE_USERS = 'RECEIVE_USERS'; // type of the action

export function receiveUsers(users) {
  // action creator
  return {
    type: RECEIVE_USERS,
    users // both object propery and variable value have the same name. We can just assign it like that
  };
}
