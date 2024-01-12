import React from 'react';
import '../../utils/homePost/homePost.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HomePostType } from './homePostType';

function HomePost(postData: HomePostType) {
    return (
        <div className="home_post_container">
            <Typography variant="h5" gutterBottom>
                {postData.userName}
            </Typography>
            <Typography sx={{ marginTop: '20px' }} variant="body1" gutterBottom>
                {postData.postQuestion}
            </Typography>
            <Button
                sx={{
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#66ffff' },
                }}
                variant="text"
            >
                Comment
            </Button>
        </div>
    );
}

export default HomePost;
