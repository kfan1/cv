import React from 'react';
import styles from './mainStyles.module.scss';

export default function MainContainer() {
  return (
    <div className={styles.bigBox}>
      <div className={styles.name}>
        <img className={styles.portrait} src='images/FullSizeR-modified.png' />
        <div className={styles.allName}>
          <h1 className={styles.bigName}>Kevin Fan</h1>
          <h3 className={styles.subtitle}>Software Engineer</h3>
          <h3 className={styles.subtitle}>Licensed Realtor</h3>
        </div>

        <p className={styles.myIntro}>
          Born in Pullman, Washington and raised in the suburbs of Philadelphia, Pennsylvania, I grew up loving the
          Eagles, building computers, playing video games, running around, and really not much else. Avid sports fan,
          amateur programmer, and enjoys all things math, science, and technology. Currently residing in Philly with my
          black cat, Toothless and my girlfriend, Stephanie, and still doing the same things 20 years later. Follow me
          while I learn to be a better programmer. Take a look at the projects I'm currently working on or on my GitHub.
        </p>
      </div>

      <div className={styles.icons}>
        <a className={styles.links} href='https://github.com/kfan1'>
          <i className='fa-brands fa-github'></i>
        </a>
        <a className={styles.links} href='https://www.linkedin.com/in/kfan1/'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <h3 className={styles.sendEmail}>Send me an email!</h3>
        <p className={styles.contact}>
          Want to talk about football or tech or programming or anything you want? You just need a friend or someone to
          talk to? Send me an email and connect with me!
        </p>
        <a
          className={styles.contactMe}
          target='_blank'
          href='https://mail.google.com/mail/?view=cm&fs=1&to=kevin@eleetcoding.com'>
          Contact Me
        </a>
      </div>
    </div>
  );
}
