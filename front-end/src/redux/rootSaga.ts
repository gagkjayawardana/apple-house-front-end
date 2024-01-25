import { all, fork } from 'redux-saga/effects';
import userSaga from './user/userSaga';
import postSaga from './post/postSaga';
import commentSaga from './comment/commentSaga';

function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(commentSaga)]);
}

export default rootSaga;
