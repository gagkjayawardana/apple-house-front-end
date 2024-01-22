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

function* addPostGenerator({ payload }: PayloadAction<AddPostType>): Generator {
  try {
    const response = yield call(addPostService, payload);
    if (response) {
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
