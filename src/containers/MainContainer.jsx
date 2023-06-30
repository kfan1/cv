import React from 'react';
import styles from './mainStyles.module.scss';
import Projects from './ProjectsContainer';
import Intro from './IntroContainer';

export default function MainContainer({ exit, projects }) {
  let projectsTab;
  if (projects) projectsTab = [<Projects />];
  else projectsTab = [<Intro styles={styles} />];

  return (
    <>
      <button className={styles.xButton} onClick={() => exit()}>
        <i className='fa-solid fa-x'></i>
      </button>
      <div className={styles.bigBox}>{projectsTab}</div>
    </>
  );
}
