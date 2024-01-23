export interface CommentType {
  commentId: number;
  postId: number;
  commentUser: string;
  comment: string;
}

export interface AddCommentType {
  postId: number;
  commentUser: string;
  comment: string;
}
