import React, { useEffect, useState } from 'react';
import '../../utils/home/homePage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import HomePost from '../../Components/HomePost/HomePost';
import { HomePostType } from '../../Components/HomePost/homePostType';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, selectUser } from '../../redux/user/userSlice';
import { getPostAction, selectPost } from '../../redux/post/postSlice';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function HomePage() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);
    const user = useSelector(selectUser);
    const [searchQuery, setSearchQuery] = useState('');

    let homeData: HomePostType[] = [];
    if (Array.isArray(posts)) {
        if (user.role === 'user') {
            homeData = posts.filter(
                (item: HomePostType) =>
                    item.postStatus === 'Approved' &&
                    (item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.postQuestion
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())),
            );
        } else {
            homeData = posts.filter(
                (item: HomePostType) =>
                    item.postStatus === 'Approved' &&
                    (item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.createdTime.toLowerCase().includes(searchQuery.toLowerCase())),
            );
        }
    }
    useEffect(() => {
        dispatch(getUserAction());
        dispatch(getPostAction());
    }, []);

    const handleSerach = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSearchQuery(e.target.value);
    };
    return (
        <div className="home_page">
            <NavigationBar />
            <div className="home_search-bar">
                <Typography sx={{ color: '#00ffff' }} variant="subtitle2" gutterBottom>
                    {user.role === 'admin'
                        ? 'You can search posts according to User or Posted date.'
                        : 'You can search posts according to User or Description'}
                </Typography>
                <TextField
                    sx={{ width: '30%', backgroundColor: '#ffffff' }}
                    id="filled-basic"
                    placeholder="Search..."
                    onChange={handleSerach}
                    value={searchQuery}
                    variant="filled"
                    size="small"
                />
            </div>
            <div className="home_page_container">
                {homeData?.map((item: HomePostType, index: number) => (
                    <HomePost
                        key={`homePost-${index}`}
                        postId={item.postId}
                        postStatus={item.postStatus}
                        userName={item.userName}
                        postQuestion={item.postQuestion}
                        createdTime={item.createdTime}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
