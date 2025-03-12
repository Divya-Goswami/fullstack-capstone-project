import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile/Profile';
// import MainPage from './components/MainPage/MainPage';
// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage
        
        />} />
        <Route path="/register" element={<RegisterPage
        
        />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer/> */}
      </>
  );
}

export default App;
