import React, { useEffect } from 'react';
import '../../utils/home/homePage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import HomePost from '../../Components/HomePost/HomePost';
import { HomePostType } from '../../Components/HomePost/homePostType';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../../redux/user/userSlice';
import { getPostAction, selectPost } from '../../redux/post/postSlice';

function HomePage() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);
    let homeData: HomePostType[] = [];
    if (Array.isArray(posts)) {
        homeData = posts.filter(
            (item: HomePostType) => item.postStatus === 'Approved',
        );
    }
    useEffect(() => {
        dispatch(getUserAction());
        dispatch(getPostAction());
    }, []);
    return (
        <div className="home_page">
            <NavigationBar />
            <div className="home_page_container">
                {homeData?.map((item: HomePostType, index: number) => (
                    <HomePost
                        key={`homePost-${index}`}
                        postId={item.postId}
                        postStatus={item.postStatus}
                        userName={item.userName}
                        postQuestion={item.postQuestion}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
