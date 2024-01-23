import axios from 'axios';
import {
  AddFeedbackType,
  AddPostType,
  ChangePostStatusType,
  DeletePostType,
} from './postType';

export const addPostService = async (post: AddPostType) => {
  try {
    const postData = {
      userName: post.userName,
      postQuestion: post.postQuestion,
    };
    const response = await axios.post(
      'http://localhost:8080/post/newPost',
      postData,
      { withCredentials: true },
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getPostsService = async () => {
  try {
    const response = await axios.get('http://localhost:8080/post/getPosts', {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const changePostStatusService = async (post: ChangePostStatusType) => {
  try {
    console.log('postsev', post);
    const postId = post.postId;
    const response = await axios.put(
      `http://localhost:8080/post/changeStatus/${postId}`,
      post,
      { withCredentials: true },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addFeedbackService = async (post: AddFeedbackType) => {
  try {
    const postId = post.postId;
    const response = await axios.put(
      `http://localhost:8080/post/addFeedback/${postId}`,
      post,
      { withCredentials: true },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deletePostService = async (post: DeletePostType) => {
  try {
    const postId = post.postId;
    const response = await axios.delete(
      `http://localhost:8080/post/deletePost/${postId}`,
      { withCredentials: true },
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
