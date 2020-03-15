export const RECEIVE_POLLS = 'RECEIVE_POLLS'; // type of the action

export function receivePolls(polls) {
  // action creator
  return {
    type: RECEIVE_POLLS,
    polls // both object propery and variable value have the same name. We can just assign it like that
  };
}
