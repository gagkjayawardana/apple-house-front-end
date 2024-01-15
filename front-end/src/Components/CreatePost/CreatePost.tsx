import React, { useState } from 'react';
import '../../utils/createPost/createPost.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreatePost() {
    const [click, setClick] = useState(false);
    const [postQuestion, setPostQuestion] = useState('');

    const handleClick = () => {
        setClick(true);
    };
    const submitQuestion = () => {
        if (postQuestion) {
            console.log('Idea', postQuestion);
        } else {
            alert('Please enter your idea');
        }
    };
    return (
        <div className="create_post_component">
            <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                Create Post
            </Typography>
            <div className="create_post_form">
                <TextField
                    id="filled-basic"
                    sx={{ width: click ? '80%' : '20%' }}
                    label="Enter Your Idea"
                    multiline
                    maxRows={3}
                    onClick={handleClick}
                    onChange={(e) => setPostQuestion(e.target.value)}
                    variant="filled"
                />
                <Button
                    sx={{
                        backgroundColor: '#000099',
                        marginLeft: '20px',
                        marginTop: '10px',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#66ffff' },
                    }}
                    onClick={submitQuestion}
                    variant="contained"
                >
                    Save
                </Button>
            </div>
        </div>
    );
}

export default CreatePost;
