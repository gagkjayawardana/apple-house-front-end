import axios from 'axios';
import { AddCommentType } from './commentsType';

export const addCommentService = async (comment: AddCommentType) => {
  try {
    const commentData = {
      postId: comment.postId,
      commentUser: comment.commentUser,
      comment: comment.comment,
    };
    const response = await axios.post(
      'http://localhost:8080/comment/addComment',
      commentData,
      { withCredentials: true },
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getCommentsService = async (postId: number) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/comment/getComments/${postId}`,
      { withCredentials: true },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
