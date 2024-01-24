import React from 'react';
import DarkMode from './DarkMode';
import { Nav } from 'react-bootstrap';
import styles from './rightSide.module.scss';

export default function RightSideNavBar({ setProjects }) {
  return (
    <Nav className={styles.rightSide}>
      <Nav.Link className={styles.rightSideLink} href='Kevin Fan Resume.pdf' target='_blank'>
        Resume
      </Nav.Link>
      <Nav.Link className={styles.rightSideLink} onClick={() => setProjects(true)}>
        Projects
      </Nav.Link>
      <Nav.Link className={styles.rightSideLink} href='https://youtu.be/MOn4Sh1fZTM' target='_blank'>
        Public Talks
      </Nav.Link>
      <Nav.Link className={styles.rightSideLink} href='https://rekuberate.org/' target='_blank'>
        ReKuberate
      </Nav.Link>
      <DarkMode className={styles.rightSideLink} />
    </Nav>
  );
}
