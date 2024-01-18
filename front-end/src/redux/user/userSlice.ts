import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './userTypes';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    registerUserAction: (state, action) => {
      state.user = action.payload;
    },
    loginUserAction: (state, action) => {
      state.user = action.payload;
    },
    getUserAction: (state) => {
      state.user;
    },
    saveUserAction: (state, action) => {
      state.user = action.payload;
    },
    logoutUserAction: (state, action) => {
      state.user = action.payload;
    },
    refreshAction: (state) => {
      state.user;
    },
  },
});

export const {
  registerUserAction,
  loginUserAction,
  getUserAction,
  saveUserAction,
  logoutUserAction,
  refreshAction,
} = userSlice.actions;

//selectors
export const selectUser = (state: { userReducer: { user: UserType } }) =>
  state.userReducer.user;

//reducers
const userReducer = userSlice.reducer;
export default userReducer;
