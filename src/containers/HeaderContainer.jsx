import React from 'react';
import RightSideNavBar from '../components/headerComponents/RightSideNavBar';
import { Container, Navbar } from 'react-bootstrap';
import styles from './headerStyles.module.scss';

export default function header({ setProjects }) {
  return (
    <Navbar className={styles.navbar} expand='lg' variant='dark'>
      <Container fluid>
        <Navbar.Brand className={styles.navbarTitle} onClick={() => setProjects(false)}>
          Kevin Fan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarSupportedContent' />
        <Navbar.Collapse id='navbarSupportedContent'>
          <RightSideNavBar setProjects={setProjects} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
