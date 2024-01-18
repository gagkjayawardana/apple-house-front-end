import React, { useEffect } from 'react';
import '../../utils/home/homePage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { Data } from '../../data/postData';
import HomePost from '../../Components/HomePost/HomePost';
import { HomePostType } from '../../Components/HomePost/homePostType';
import { useDispatch } from 'react-redux';
import { getUserAction } from '../../redux/user/userSlice';

function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserAction())
    }, [])
    return (
        <div className="home_page">
            <NavigationBar />
            <div className="home_page_container">
                {Data.map((item: HomePostType, index) => (
                    <HomePost
                        key={`homePost-${index}`}
                        postId={item.postId}
                        userName={item.userName}
                        postQuestion={item.postQuestion}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
