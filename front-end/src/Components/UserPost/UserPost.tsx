import React from 'react';
import '../../utils/userPost/userPost.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { UserPostType } from '../userPostType';

function UserPost(postData: UserPostType) {
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
                {postData.postStatus !== 'Approved' &&
                    <>
                        <Button
                            sx={{
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#66ffff' },
                            }}
                            variant="text"
                        >
                            Comment
                        </Button>
                        <Button
                            sx={{
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#66ffff' },
                            }}
                            variant="text"
                        >
                            Feedback
                        </Button>
                    </>
                }
                <Button
                    sx={{
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#66ffff' },
                    }}
                    variant="text"
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default UserPost;
