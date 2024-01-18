import { PayloadAction } from '@reduxjs/toolkit';
import {
  getLogedUserService,
  loginUserService,
  logoutUserService,
  registerUserService,
} from './userService';
import { LoginUsertype, LogoutUserType, RegisterUserType } from './userTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getUserAction,
  loginUserAction,
  logoutUserAction,
  refreshAction,
  registerUserAction,
  saveUserAction,
} from './userSlice';

function* registerUserGenerator({
  payload,
}: PayloadAction<RegisterUserType>): Generator {
  try {
    const response = yield call(registerUserService, payload);
    if (response) {
      alert('SuccessFully Created Account');
      payload.navigate('/home');
    } else {
      alert('Registration Failed! Please Enter Valid Details');
    }
  } catch (err) {
    alert('Registration Failed! Please Enter Valid Details');
  }
}

function* loginUserGenerator({
  payload,
}: PayloadAction<LoginUsertype>): Generator {
  try {
    const response = yield call(loginUserService, payload);
    if (response) {
      alert('Successfully Login');
      payload.navigate('/home');
    } else {
      alert('Login Failed! Please Enter Valid Details');
    }
  } catch (err) {
    alert('Login Failed! Please Enter Valid Details');
  }
}

function* getLogedUserGenerator(): Generator {
  try {
    const response = yield call(getLogedUserService);
    if (response) {
      yield put(saveUserAction(response));
    }
  } catch (err) {
    alert('Cannot find user');
  }
}

function* logoutUserGenerator({
  payload,
}: PayloadAction<LogoutUserType>): Generator {
  try {
    const response = yield call(logoutUserService);
    if (response) {
      payload.navigate('/');
    } else {
      alert('Your Session is Expired');
      payload.navigate('/');
    }
  } catch (err) {
    console.log(err);
  }
}

function* refreshUserGenerator(): Generator {
  try {
    const response = yield call(getLogedUserService);
    if (response) {
      yield put(saveUserAction(response));
    }
  } catch (err) {
    alert('Cannot find user');
  }
}

function* userSaga() {
  yield takeEvery(registerUserAction, registerUserGenerator);
  yield takeEvery(loginUserAction, loginUserGenerator);
  yield takeEvery(getUserAction, getLogedUserGenerator);
  yield takeEvery(logoutUserAction, logoutUserGenerator);
  yield takeEvery(refreshAction, refreshUserGenerator);
}

export default userSaga;
