import { all, fork } from 'redux-saga/effects';
import userSaga from './user/userSaga';
import postSaga from './post/postSaga';

function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

export default rootSaga;
