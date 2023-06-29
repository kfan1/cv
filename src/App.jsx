import React, { useEffect, useState } from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import styles from './stylesheets/AppStyles.module.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const [enter, setEnter] = useState(false);

  function openSesame(e) {
    e.preventDefault();
    setEnter(true);
    document.querySelector(`.${styles.loadingScreenLeft}`).setAttribute('start', 'yes');
    document.querySelector(`.${styles.loadingScreenRight}`).setAttribute('start', 'yes');
  }

  let loadingButton;
  if (!loading && enter) loadingButton = [];
  if (!loading && !enter)
    loadingButton = [
      <button className={styles.enterButton} onClick={(e) => openSesame(e)}>
        WELCOME
      </button>,
    ];
  if (loading)
    loadingButton = [
      <div className={styles.loadingWheel}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>,
    ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loadingButton}
      <div className={styles.loadingScreenLeft}></div>
      <div className={styles.loadingScreenRight}></div>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
