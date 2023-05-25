import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import MainPage from './pages/MainPage.jsx';

function App() {
  return (
    <div>
      <HeaderContainer />
      <MainPage />      
      <FooterContainer />
    </div>
  );
}

export default App;
