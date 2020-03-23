import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_POLLS = 'RECEIVE_POLLS'; // type of the action
export const ADD_POLL = 'ADD_POLL';

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll
  };
}

// We need a more details action create to handle add poll

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return savePoll({
      ...poll,
      author: authedUser
    })
      .then(poll => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receivePolls(polls) {
  // action creator
  return {
    type: RECEIVE_POLLS,
    polls // both object propery and variable value have the same name. We can just assign it like that
  };
}
