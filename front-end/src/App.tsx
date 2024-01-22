import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './Pages/Register/RegisterPage';
import HomePage from './Pages/Home/HomePage';
import CommentsPage from './Pages/Comments/CommentsPage';
import UserPage from './Pages/User/UserPage';
import AdminPage from './Pages/Admin/AdminPage';
import { useDispatch } from 'react-redux';
import { refreshAction } from './redux/user/userSlice';
import { getPostAction } from './redux/post/postSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshAction());
    dispatch(getPostAction())
  }, []);
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
