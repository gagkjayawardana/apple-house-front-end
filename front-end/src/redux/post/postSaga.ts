import { PayloadAction } from '@reduxjs/toolkit';
import {
  AddFeedbackType,
  AddPostType,
  ChangePostStatusType,
  DeletePostType,
} from './postType';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  addFeedbackService,
  addPostService,
  changePostStatusService,
  deletePostService,
  getPostsService,
} from './postService';
import {
  addFeedbackAction,
  addPostAction,
  changeStatusAction,
  deletePostAction,
  getPostAction,
  savePostAction,
} from './postSlice';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080/', {
  transports: ['websocket'],
});

function* addPostGenerator({ payload }: PayloadAction<AddPostType>): Generator {
  try {
    const response = yield call(addPostService, payload);
    if (response) {
      const userName = payload.userName;
      socket.emit('post_add', `New post add by ${userName}`);
      yield put(getPostAction());
    } else {
      alert('Post not added');
    }
  } catch (err) {
    alert('Post not added');
  }
}

function* getAllPostsGenerator(): Generator {
  try {
    const response = yield call(getPostsService);
    if (response) {
      yield put(savePostAction(response));
    }
  } catch (err) {
    alert('Cannot find posts');
  }
}

function* chagePostStatusGenerator({
  payload,
}: PayloadAction<ChangePostStatusType>): Generator {
  try {
    const response = yield call(changePostStatusService, payload);
    if (response) {
      if (payload.postStatus === 'Approved') {
        socket.emit('approve_post', `Your post approved`);
      } else {
        socket.emit('reject_post', `Your post rejected`);
      }
      yield put(getPostAction());
    }
  } catch (err) {
    alert('Status does not changed');
  }
}

function* addFeedbackGenerator({
  payload,
}: PayloadAction<AddFeedbackType>): Generator {
  try {
    const response = yield call(addFeedbackService, payload);
    if (response) {
      yield put(getPostAction());
    }
  } catch (err) {
    alert('Feedback not added');
  }
}

function* deletePostGenerator({
  payload,
}: PayloadAction<DeletePostType>): Generator {
  try {
    const response = yield call(deletePostService, payload);
    if (response) {
      yield put(getPostAction());
    }
  } catch (err) {
    alert('Cannot delete post');
  }
}

function* postSaga() {
  yield takeEvery(addPostAction, addPostGenerator);
  yield takeEvery(getPostAction, getAllPostsGenerator);
  yield takeEvery(changeStatusAction, chagePostStatusGenerator);
  yield takeEvery(addFeedbackAction, addFeedbackGenerator);
  yield takeEvery(deletePostAction, deletePostGenerator);
}

export default postSaga;
