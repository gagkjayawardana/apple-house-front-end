import React from 'react';
import '../../utils/home/homePage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { Data } from '../../data/postData';
import HomePost from '../../Components/HomePost/HomePost';
import { HomePostType } from '../../Components/HomePost/homePostType';

function HomePage() {
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
