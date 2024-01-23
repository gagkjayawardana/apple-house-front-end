import { createSlice } from '@reduxjs/toolkit';
import { CommentType } from './commentsType';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comment: [],
  },
  reducers: {
    addCommentAction: (state, action) => {
      state.comment = action.payload;
    },
    getCommentsAction: (state, action) => {
      state.comment = action.payload;
    },
    saveCommentAction: (state, action) => {
      state.comment = action.payload;
    },
    deleteCommentAction: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const {
  addCommentAction,
  getCommentsAction,
  saveCommentAction,
  deleteCommentAction,
} = commentSlice.actions;

//reducers
export const commentReducer = commentSlice.reducer;

//selectors
export const selectComment = (state: {
  commentReducer: { comment: CommentType };
}) => state.commentReducer.comment;
