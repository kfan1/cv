import React from 'react';
import DarkMode from './DarkMode';
import { Nav } from 'react-bootstrap';
import styles from './rightSide.module.scss';

export default function RightSideNavBar() {
  return (
    <Nav className={styles.rightSide} >
      <Nav.Link className={styles.rightSideLink} href='Kevin Fan Resume.pdf'>
        Resume
      </Nav.Link>
      <Nav.Link className={styles.rightSideLink} href='https://github.com/kfan1'>
        Projects
      </Nav.Link>
      <Nav.Link className={styles.rightSideLink} href='https://rekuberate.org/'>
        ReKuberate
      </Nav.Link>
      <DarkMode className={styles.rightSideLink} />
    </Nav>
  );
}
