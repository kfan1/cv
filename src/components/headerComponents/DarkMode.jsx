import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import styles from './darkMode.module.scss';

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(null);

  let currTheme;
  let selectedDay;
  let selectedNight;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches && darkMode === null) {
    setDarkMode('dark');
  }

  document.querySelector('body').setAttribute('theme', darkMode);

  if (darkMode === 'dark') {
    currTheme = <i className='fa-solid fa-moon' id={styles.color}></i>;
    selectedNight = <i className='fa-solid fa-check' id={styles.darkModeCheck}></i>;
  } else {
    currTheme = <i className='fa-solid fa-sun' id={styles.color}></i>;
    selectedDay = <i className='fa-solid fa-check' id={styles.darkModeCheck}></i>;
  }

  return (
    <NavDropdown title={currTheme} id={styles.dropdownBasic} >
      <NavDropdown.Item  onClick={() => setDarkMode('light')}>
        <i className='fa-solid fa-sun' id={styles.sun}></i> Light
        {selectedDay}
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => setDarkMode('dark')}>
        <i className='fa-solid fa-moon' id={styles.moon}></i> Dark
        {selectedNight}
      </NavDropdown.Item>
    </NavDropdown>
  );
}
