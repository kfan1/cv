import React from 'react';
import styles from './ProjectStyles.module.scss';

export default function Projects() {
  return (
    <div className={styles.grid}>
      <div>
        <p className={styles.projectTitle}>ReKuberate</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>
        A lightweight, visual representation of Kubernetes clusters to monitor pod health and metrics including uptime,
        availability, request per second, CPU usage, and memory
      </p>

      <div>
        <p className={styles.projectTitle}>SQLizer/Nothing</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>
        A web-based application that allows users to visually interact with SQL databases to generate queries reducing
        the tedious need to memorize SQL query structure and syntax
      </p>

      <div>
        <p className={styles.projectTitle}>MonDinero</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>A simple and visual way to track your expenses and budget</p>

      <div>
        <p className={styles.projectTitle}>Fullstack Boiler Plate</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>
        MERN (MongoDB, ExpressJS, React, NodeJS) fullstack boilerplate with Bootstrap, Bcrypt, Sass, and Redux.
      </p>

      <div>
        <p className={styles.projectTitle}>Python Blog</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>
        A fullstack blog written in Python taking advantage of Flask and Jinja for framework and templating, Werkzeug
        for password authentication, and SQLAlchemy for data storage
      </p>

      <div>
        <p className={styles.projectTitle}>CallStack</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>
        A full-stack blog written in Python taking advantage of Flask and Jinja for framework and templating, Werkzeug
        for password authentication, and SQLAlchemy for data storage
      </p>

      <div>
        <p className={styles.projectTitle}>Code Snippets</p>
        <p className={styles.gitLink}>
          <a>github</a>
        </p>
      </div>
      <p className={styles.description}>
        Iteration of Code Snippets, an application to create, test, and save your most commonly used snippets of code
        for future reference and use.
      </p>
    </div>
  );
}
