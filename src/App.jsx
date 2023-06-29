import React from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import styles from './stylesheets/AppStyles.module.scss';

function App() {
  return (
    <div>
      <button className={styles.enterButton}>ENTER</button>
      <div className={styles.loadingScreenLeft}></div>
      <div className={styles.loadingScreenRight}></div>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
