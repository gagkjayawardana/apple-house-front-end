import { createSlice } from '@reduxjs/toolkit';
import { PostType } from './postType';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: [],
  },
  reducers: {
    addPostAction: (state, action) => {
      state.post = action.payload;
    },
    getPostAction: (state) => {
      state.post;
    },
    savePostAction: (state, action) => {
      state.post = action.payload;
    },
    addFeedbackAction: (state, action) => {
      state.post = action.payload;
    },
    changeStatusAction: (state, action) => {
      state.post = action.payload;
    },
    deletePostAction: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const {
  addPostAction,
  getPostAction,
  savePostAction,
  addFeedbackAction,
  changeStatusAction,
  deletePostAction,
} = postSlice.actions;

//reducers
export const postReducer = postSlice.reducer;

//selectors
export const selectPost = (state: { postReducer: { post: PostType } }) =>
  state.postReducer.post;
