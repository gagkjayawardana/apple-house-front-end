import React from 'react';
import '../../utils/admin/adminPage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import CreatePost from '../../Components/CreatePost/CreatePost';
import Typography from '@mui/material/Typography';
import AdminPost from '../../Components/AdminPost/AdminPost';
import UserPost from '../../Components/UserPost/UserPost';
import { useSelector } from 'react-redux';
import { selectPost } from '../../redux/post/postSlice';
import { AdminPostType } from '../../Components/AdminPost/adminPostType';
import { UserPostType } from '../../Components/UserPost/userPostType';

function AdminPage() {
    const posts = useSelector(selectPost);
    let adminData: UserPostType[] = [];
    if (Array.isArray(posts)) {
        adminData = posts.filter(
            (item: AdminPostType) => item.userName === 'Admin',
        );
    }
    const pendingPosts = () => {
        let pendingData: AdminPostType[] = [];
        if (Array.isArray(posts)) {
            pendingData = posts.filter(
                (item: AdminPostType) => item.postStatus === 'Pending',
            );
        }
        return (
            <div className="post_component">
                <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                    Pending Posts
                </Typography>
                <div className="post_container">
                    {pendingData.map((item: AdminPostType, index: number) => (
                        <AdminPost
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
        );
    };
    const rejectedPosts = () => {
        let rejectedData: AdminPostType[] = [];
        if (Array.isArray(posts)) {
            rejectedData = posts.filter(
                (item: AdminPostType) => item.postStatus === 'Rejected',
            );
        }
        return (
            <div className="post_component">
                <Typography sx={{ color: '#ffffff' }} variant="h4" gutterBottom>
                    Rejected Posts
                </Typography>
                <div className="post_container">
                    {rejectedData
                        .slice(0)
                        .reverse()
                        .map((item: AdminPostType, index: number) => (
                            <AdminPost
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
                    {adminData.map((item: UserPostType, index: number) => (
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
