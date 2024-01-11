import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
