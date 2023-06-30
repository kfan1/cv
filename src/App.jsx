import React, { useEffect, useState } from 'react';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import styles from './stylesheets/AppStyles.module.scss';
import Projects from './containers/ProjectsContainer.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [enter, setEnter] = useState(false);
  const [projects, setProjects] = useState(false);

  function openSesame(e) {
    e.preventDefault();
    setEnter(true);
    document.querySelector(`.${styles.loadingScreenLeft}`).setAttribute('start', 'yes');
    document.querySelector(`.${styles.loadingScreenRight}`).setAttribute('start', 'yes');
    document.querySelector(`.${styles.everything}`).style.display = 'block';
  }

  function exit() {
    setTimeout(() => setEnter(false), 3500);
    document.querySelector(`.${styles.loadingScreenLeft}`).setAttribute('start', 'no');
    document.querySelector(`.${styles.loadingScreenRight}`).setAttribute('start', 'no');
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

  let projectsTab;
  if (projects) projectsTab = [<Projects />];
  else projectsTab = [<MainContainer exit={exit} />];

  return (
    <div>
      {loadingButton}
      <div className={styles.loadingScreenLeft}></div>
      <div className={styles.loadingScreenRight}></div>
      <div className={styles.everything}>
        <HeaderContainer setProjects={setProjects} />
        {projectsTab}
        <FooterContainer />
      </div>
    </div>
  );
}

export default App;
