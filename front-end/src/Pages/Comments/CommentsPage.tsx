import React, { useEffect, useState } from 'react';
import '../../utils/comments/commentsPage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { CommentsFilterType } from './commentsTypes';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSlice';
import {
    addCommentAction,
    getCommentsAction,
    selectComment,
} from '../../redux/comment/commentSlice';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8080/', {
    transports: ['websocket'],
});

function CommentsPage() {
    const { postId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommentsAction(postId));
    }, []);
    const addComments = () => {
        const user = useSelector(selectUser);
        const [newComment, setNewComment] = useState('');
        const addNewComment = () => {
            const commentUser = user.userName;
            if (newComment) {
                const comment = newComment;
                dispatch(addCommentAction({ postId, commentUser, comment }));
                setNewComment('');
            } else {
                alert('Please add comment');
            }
        };
        return (
            <div className="add_comment">
                <Typography sx={{ color: '#000099' }} variant="h6" gutterBottom>
                    Add Comments
                </Typography>
                <TextField
                    id="outlined-multiline-flexible"
                    sx={{ marginTop: '10px' }}
                    label="Enter Comments"
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                    multiline
                    maxRows={3}
                    fullWidth
                />
                <Button
                    sx={{
                        backgroundColor: '#000099',
                        marginTop: '10px',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#66ffff' },
                    }}
                    onClick={addNewComment}
                    variant="contained"
                >
                    Add
                </Button>
            </div>
        );
    };

    const commentsForum = () => {
        const comments = useSelector(selectComment);
        useEffect(() => {
            if (Array.isArray(comments)) {
                socket.on('connect', () => {
                    console.log('Socket Id', socket.id);
                });
                socket.on('comment_added', (data) => {
                    alert(data);
                    dispatch(getCommentsAction(postId));
                });
                socket.on('connect_error', (err) => {
                    console.log(`connect_error due to ${err.message}`);
                });
                return () => {
                    socket.off();
                };
            }
        }, [comments, socket]);
        return (
            <div className="comment_forum">
                <Typography sx={{ color: '#000099' }} variant="h3" gutterBottom>
                    Comments
                </Typography>
                {Array.isArray(comments) &&
                    comments.map((items: CommentsFilterType, index: number) => (
                        <div className="comments" key={`comment-${index}`}>
                            <Typography variant="h6" gutterBottom>
                                {items.commentUser}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {items.comment}
                            </Typography>
                        </div>
                    ))}
            </div>
        );
    };
    return (
        <div className="comments_page">
            <NavigationBar />
            <div className="comments_container">
                <div className="comment_post">
                    <div className="comment_post_content">
                        <Typography variant="h5" gutterBottom>
                            User1
                        </Typography>
                        <Typography sx={{ marginTop: '20px' }} variant="body1" gutterBottom>
                            This is a post that used to check the comment page. Is this a
                            post?
                        </Typography>
                    </div>
                    {addComments()}
                </div>
                {commentsForum()}
            </div>
        </div>
    );
}

export default CommentsPage;
