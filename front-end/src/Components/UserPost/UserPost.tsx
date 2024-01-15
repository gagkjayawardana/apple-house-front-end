import React, { useState } from 'react';
import '../../utils/userPost/userPost.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserPostType } from './userPostType';
import { useNavigate } from 'react-router';

function UserPost(postData: UserPostType) {
    const navigate = useNavigate();
    const navigateToComments = () => {
        navigate(`/comments/${postData.postId}`);
    };

    const [display, setDisplay] = useState(false);
    const displayFeedbacks = () => {
        const openFeedback = () => {
            setDisplay(true);
        };
        const cancelFeedback = () => {
            setDisplay(false);
        };
        return (
            <div className="user_feedback_container">
                {postData.postStatus === 'Rejected' && (
                    <>
                        {!display && (
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#66ffff' },
                                }}
                                onClick={openFeedback}
                                variant="text"
                            >
                                Feedback
                            </Button>
                        )}
                        {display && (
                            <div className="user_feedbacks">
                                <Typography variant="h6" gutterBottom>
                                    Feedbacks
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {postData.postFeedback}
                                </Typography>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        '&:hover': { backgroundColor: '#66ffff' },
                                    }}
                                    onClick={cancelFeedback}
                                    variant="text"
                                >
                                    Back
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    };
    return (
        <div className="user_post_container">
            <Typography variant="h5" gutterBottom>
                {postData.userName}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Status: {postData.postStatus}
            </Typography>
            <Typography sx={{ marginTop: '20px' }} variant="body1" gutterBottom>
                {postData.postQuestion}
            </Typography>
            <div className="user_post_action">
                {postData.postStatus === 'Approved' && (
                    <>
                        <Button
                            sx={{
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#66ffff' },
                            }}
                            onClick={navigateToComments}
                            variant="text"
                        >
                            Comment
                        </Button>
                    </>
                )}
                {displayFeedbacks()}
                {!display && (
                    <Button
                        sx={{
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        variant="text"
                    >
                        Delete
                    </Button>
                )}
            </div>
        </div>
    );
}

export default UserPost;
