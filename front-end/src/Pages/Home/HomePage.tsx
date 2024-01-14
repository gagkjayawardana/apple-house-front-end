import React from 'react';
import '../../utils/home/homePage.css';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { Data } from '../../data/postData';
import HomePost from '../../Components/HomePost/HomePost';

function HomePage() {
    return (
        <div className="home_page">
            <NavigationBar />
            <div className="home_page_container">
                {Data.map((item, index) => (
                    <HomePost
                        key={`homePost-${index}`}
                        userName={item.userName}
                        postQuestion={item.postQuestion}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
