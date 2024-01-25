export interface PostType {
  postId: number;
  userName: string;
  postQuestion: string;
  postStatus: string;
  postFeedback: string;
}

export interface AddPostType {
  userName: string;
  postQuestion: string;
}

export interface ChangePostStatusType {
  postId: number;
  userName: string;
  postQuestion: string;
  postStatus: string;
}

export interface AddFeedbackType {
  postId: number;
  userName: string;
  postQuestion: string;
  postStatus: string;
  postFeedback: string;
}

export interface DeletePostType {
  postId: number;
}
