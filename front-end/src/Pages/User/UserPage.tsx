import React, { useState } from 'react';
import '../../utils/user/userPage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Data } from '../../data/postData';
import UserPost from '../../Components/UserPost/UserPost';
import { useParams } from 'react-router';
import { UserPostType } from '../../Components/UserPost/userPostType';

function UserPage() {
    const { userName } = useParams();
    const userData = Data.filter((item) => item.userName === userName);

    const [displayData, setDisplayData] = useState<Array<UserPostType>>(userData);
    const displayAllPosts = () => {
        setDisplayData(userData);
    };
    const displayApprovedPosts = () => {
        const approvedData = userData.filter(
            (item) => item.postStatus === 'Approved',
        );
        if (approvedData) {
            setDisplayData(approvedData);
        }
    };
    const displayPendingPosts = () => {
        const pendingData = userData.filter(
            (item) => item.postStatus === 'Pending',
        );
        if (pendingData) {
            setDisplayData(pendingData);
        }
    };
    const displayRejectedPosts = () => {
        const rejectedData = userData.filter(
            (item) => item.postStatus === 'Rejected',
        );
        if (rejectedData) {
            setDisplayData(rejectedData);
        }
    };
    return (
        <div className="user_page">
            <NavigationBar />
            <CreatePost />
            <div className="user_post_component">
                <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                    Your Posts
                </Typography>
                <div className="user_post_categories">
                    <Button
                        sx={{
                            backgroundColor: '#000099',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        onClick={displayAllPosts}
                        variant="contained"
                    >
                        All
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: '#000099',
                            marginLeft: '10px',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        onClick={displayPendingPosts}
                        variant="contained"
                    >
                        Pending
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: '#000099',
                            marginLeft: '10px',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        onClick={displayApprovedPosts}
                        variant="contained"
                    >
                        Approved
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: '#000099',
                            marginLeft: '10px',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#66ffff' },
                        }}
                        onClick={displayRejectedPosts}
                        variant="contained"
                    >
                        Rejected
                    </Button>
                </div>
                <div className="post_of_user">
                    {displayData.map((item: UserPostType, index: number) => (
                        <UserPost
                            key={`userPost-${index}`}
                            postId={item.postId}
                            userName={item.userName}
                            postStatus={item.postStatus}
                            postQuestion={item.postQuestion}
                            postFeedback={item.postFeedback}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserPage;
