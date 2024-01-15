import React, { useState } from 'react';
import '../../utils/comments/commentsPage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { CommentsData } from '../../data/commentsData';
import { CommentsFilterType } from './commentsTypes';

function CommentsPage() {
    const addComments = () => {
        const [newComment, setNewComment] = useState('');
        const addNewComment = () => {
            if (newComment) {
                console.log('comment', newComment);
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
        const { postId } = useParams();
        let comments;
        if (postId) {
            const postIdAsNumber = parseInt(postId);
            comments = CommentsData.filter(
                (items: CommentsFilterType) => items.postId === postIdAsNumber,
            );
        }
        return (
            <div className="comment_forum">
                <Typography sx={{ color: '#000099' }} variant="h3" gutterBottom>
                    Comments
                </Typography>
                {comments?.map((items, index) => (
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
