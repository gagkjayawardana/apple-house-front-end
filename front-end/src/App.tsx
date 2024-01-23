import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './Pages/Register/RegisterPage';
import HomePage from './Pages/Home/HomePage';
import CommentsPage from './Pages/Comments/CommentsPage';
import UserPage from './Pages/User/UserPage';
import AdminPage from './Pages/Admin/AdminPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAction, selectUser } from './redux/user/userSlice';
import { getPostAction, selectPost } from './redux/post/postSlice';
import { io } from 'socket.io-client';
import { PostType } from './redux/post/postType';

const socket = io('http://localhost:8080/', {
  transports: ['websocket'],
});

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const user = useSelector(selectUser);

  let pendingData: Array<PostType> = [];
  let approvedData: Array<PostType> = [];
  let rejectedData: Array<PostType> = [];

  if (Array.isArray(posts) && user.role) {
    pendingData = posts.filter(
      (item: PostType) => item.postStatus === 'Pending',
    );
    approvedData = posts.filter(
      (item: PostType) =>
        item.postStatus === 'Approved' && item.userName === user.userName,
    );
    rejectedData = posts.filter(
      (item: PostType) =>
        item.postStatus === 'Rejected' && item.userName === user.userName,
    );
  }

  useEffect(() => {
    dispatch(refreshAction());
    dispatch(getPostAction());
  }, []);

  useEffect(() => {
    if (user.role === 'admin') {
      socket.on('connect', () => {
        console.log('Socket Id ', socket.id);
      });
      socket.on('post_added', (data) => {
        alert(data);
        dispatch(getPostAction());
      });
      socket.on('connect_error', (err) => {
        console.log(`connect_error due to ${err.message}`);
      });

      return () => {
        socket.off();
      };
    }
  }, [pendingData, socket]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket Id ', socket.id);
    });
    socket.on('approved_post', (data) => {
      alert(data);
      dispatch(getPostAction());
    });
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    return () => {
      socket.off();
    };
  }, [approvedData, socket]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket Id ', socket.id);
    });
    socket.on('rejected_post', (data) => {
      alert(data);
      dispatch(getPostAction());
    });
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    return () => {
      socket.off();
    };
  }, [rejectedData, socket]);

  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/comments/:postId" element={<CommentsPage />} />
            <Route path="/user/:userName" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
