import { combineReducers } from 'redux';
import users from './users';
import polls from './polls';
import authedUser from './authedUsers';

export default combineReducers({
  users,
  polls,
  authedUser
});
