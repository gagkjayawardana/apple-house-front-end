import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './Pages/Register/RegisterPage';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
