import React from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';

import MainContainer from './containers/MainContainer.jsx';

function App() {
  return (
    <div>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
