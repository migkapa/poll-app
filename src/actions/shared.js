import { getInitialData } from '../utils/api';
import { receivePolls } from './polls';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis'; // we're not using real authentication

// action creator for getting initial data
// this is a thunk because it returns a function
export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());

    // because we have access to dispatch we can make asynchronous requests
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
