import { PayloadAction } from '@reduxjs/toolkit';
import { AddCommentType } from './commentsType';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addCommentService, getCommentsService } from './commentService';
import {
  addCommentAction,
  getCommentsAction,
  saveCommentAction,
} from './commentSlice';
import { io } from 'socket.io-client';
import { getNewAccessTokenService } from '../user/userService';

const socket = io('http://localhost:8080/', {
  transports: ['websocket'],
});

function* addCommentGenerator({
  payload,
}: PayloadAction<AddCommentType>): Generator {
  try {
    const response = yield call(addCommentService, payload);
    if (response) {
      const userName = payload.commentUser;
      socket.emit('add_comment', `New comment add by ${userName}`);
      yield put(getCommentsAction(payload.postId));
    } else {
      try {
        const authorized = yield call(getNewAccessTokenService);
        if (authorized) {
          const reresponse = yield call(addCommentService, payload);
          if (reresponse) {
            const userName = payload.commentUser;
            socket.emit('add_comment', `New comment add by ${userName}`);
            yield put(getCommentsAction(payload.postId));
          } else {
            alert('Unauthorized, Please LogIn to the system');
          }
        }
      } catch (err) {
        alert('Unauthorized');
      }
    }
  } catch (err) {
    alert('Cannot add comment');
  }
}

function* getCommentsGenerator({ payload }: PayloadAction<number>): Generator {
  try {
    const response = yield call(getCommentsService, payload);
    if (response) {
      yield put(saveCommentAction(response));
    }
  } catch (err) {
    alert('Cannot find comments');
  }
}

function* commentSaga() {
  yield takeEvery(addCommentAction, addCommentGenerator);
  yield takeEvery(getCommentsAction, getCommentsGenerator);
}

export default commentSaga;
