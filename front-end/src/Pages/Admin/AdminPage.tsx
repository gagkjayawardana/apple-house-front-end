import React from 'react';
import '../../utils/admin/adminPage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Typography from '@mui/material/Typography';
import { Data } from '../../data/postData';
import AdminPost from '../../Components/AdminPost/AdminPost';
import UserPost from '../../Components/UserPost/UserPost';

function AdminPage() {
    const adminData = Data.filter((item) => item.userName === 'Admin');
    const pendingPosts = () => {
        const pendingData = Data.filter((item) => item.postStatus === 'Pending');
        return (
            <div className="post_component">
                <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                    Pending Posts
                </Typography>
                <div className="post_container">
                    {pendingData.map((item, index) => (
                        <AdminPost
                            key={`pending-${index}`}
                            userName={item.userName}
                            postStatus={item.postStatus}
                            postQuestion={item.postQuestion}
                            postFeedback={item.postFeedback}
                        />
                    ))}
                </div>
            </div>
        );
    };
    const rejectedPosts = () => {
        const rejectedData = Data.filter((item) => item.postStatus === 'Rejected');
        return (
            <div className="post_component">
                <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                    Rejected Posts
                </Typography>
                <div className="post_container">
                    {rejectedData
                        .slice(0)
                        .reverse()
                        .map((item, index) => (
                            <AdminPost
                                key={`pending-${index}`}
                                userName={item.userName}
                                postStatus={item.postStatus}
                                postQuestion={item.postQuestion}
                                postFeedback={item.postFeedback}
                            />
                        ))}
                </div>
            </div>
        );
    };
    return (
        <div className="admin_page">
            <NavigationBar />
            <CreatePost />
            <div className="post_component">
                <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                    Your Posts
                </Typography>
                <div className="post_container">
                    {adminData.map((item, index) => (
                        <UserPost
                            key={`pending-${index}`}
                            postId={item.postId}
                            userName={item.userName}
                            postStatus={item.postStatus}
                            postQuestion={item.postQuestion}
                            postFeedback={item.postFeedback}
                        />
                    ))}
                </div>
            </div>
            {pendingPosts()}
            {rejectedPosts()}
        </div>
    );
}

export default AdminPage;
