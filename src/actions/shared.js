import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';
import { receiveUsers } from './users';

// action creator for getting initial data
// this is a thunk because it returns a function
export function handleInitialData() {
  return dispatch => {
    // because we have access to dispatch we can make asynchronous requests
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
    });
  };
}
