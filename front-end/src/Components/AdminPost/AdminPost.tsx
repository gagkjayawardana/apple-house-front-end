import React, { useState } from 'react';
import '../../utils/adminPost/adminPost.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AdminPostType } from './adminPostType';
import TextField from '@mui/material/TextField';

function AdminPost(postData: AdminPostType) {
    const displayFeedbacks = () => {
        return (
            <>
                {postData.postFeedback && (
                    <div className="post_feedbacks">
                        <Typography sx={{ color: '#000099' }} variant="h6" gutterBottom>
                            Feedbacks
                        </Typography>
                        <Typography sx={{ marginTop: '10px' }} variant="body2" gutterBottom>
                            {postData.postFeedback}
                        </Typography>
                    </div>
                )}
            </>
        );
    };

    const rejectedPost = () => {
        const [addFeedback, setAddFeedback] = useState(false);
        const [feedback, setFeedback] = useState('');

        const displayFeedbackForm = () => {
            setAddFeedback(true);
        };

        const cancelAddFeedback = () => {
            setAddFeedback(false);
        };

        const saveFeedback = () => {
            if (feedback) {
                console.log('Feedbacks', feedback);
            } else {
                alert('Please add feedbacks');
            }
        };
        return (
            <>
                {postData.postStatus === 'Rejected' && (
                    <div className="feedback_container">
                        {!postData.postFeedback && (
                            <>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        '&:hover': { backgroundColor: '#66ffff' },
                                    }}
                                    variant="text"
                                    onClick={displayFeedbackForm}
                                >
                                    Add Feedback
                                </Button>
                                {addFeedback && (
                                    <>
                                        <hr />
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            label="Enter Feedbacks"
                                            onChange={(e) => setFeedback(e.target.value)}
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
                                            onClick={saveFeedback}
                                            variant="contained"
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            sx={{
                                                backgroundColor: '#000099',
                                                marginTop: '10px',
                                                marginLeft: '10px',
                                                textTransform: 'none',
                                                '&:hover': { backgroundColor: '#66ffff' },
                                            }}
                                            onClick={cancelAddFeedback}
                                            variant="contained"
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                )}
                            </>
                        )}
                        {displayFeedbacks()}
                    </div>
                )}
            </>
        );
    };
    return (
        <div className="admin_post_container">
            <Typography variant="h5" gutterBottom>
                {postData.userName}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                {postData.postStatus}
            </Typography>
            <Typography sx={{ marginTop: '10px' }} variant="body1" gutterBottom>
                {postData.postQuestion}
            </Typography>
            <div className="admin_post_status">
                {postData.postStatus === 'Pending' && (
                    <>
                        <Typography variant="subtitle1" gutterBottom>
                            Approve or Reject the Post
                        </Typography>
                        <div className="admin_post_status_buttons">
                            <Button
                                sx={{
                                    backgroundColor: '#000099',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#66ffff' },
                                }}
                                variant="contained"
                            >
                                Approve
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: '#000099',
                                    marginLeft: '20px',
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#66ffff' },
                                }}
                                variant="contained"
                            >
                                Reject
                            </Button>
                        </div>
                    </>
                )}
                {rejectedPost()}
            </div>
        </div>
    );
}

export default AdminPost;
