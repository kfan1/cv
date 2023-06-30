import React from 'react';
import styles from './ProjectStyles.module.scss';

export default function Projects() {
  return (
    <div className={styles.grid}>
      <p className={styles.projectTitle} onClick={() => window.open('https://github.com/oslabs-beta/ReKuberate')}>
        ReKuberate
      </p>
      <p className={styles.description}>
        A lightweight, visual representation of Kubernetes clusters to monitor pod health and metrics including uptime,
        availability, request per second, CPU usage, and memory
      </p>

      <p className={styles.projectTitle} onClick={() => window.open('https://github.com/kfan1/Nothing')}>
        SQLizer/Nothing
      </p>
      <p className={styles.description}>
        A web-based application that allows users to visually interact with SQL databases to generate queries reducing
        the tedious need to memorize SQL query structure and syntax
      </p>

      <p className={styles.projectTitle} onClick={() => window.open('https://github.com/Mondinero/MonDinero')}>
        MonDinero
      </p>
      <p className={styles.description}>A simple and visual way to track your expenses and budget</p>

      <p className={styles.projectTitle} onClick={() => window.open('https://github.com/kfan1/boiler_plate')}>
        Fullstack Boiler Plate
      </p>
      <p className={styles.description}>
        MERN (MongoDB, ExpressJS, React, NodeJS) fullstack boilerplate with Bootstrap, Bcrypt, Sass, and Redux.
      </p>

      <p className={styles.projectTitle} onClick={() => window.open('https://github.com/kfan1/kevin-blog')}>
        Python Blog
      </p>
      <p className={styles.description}>
        A fullstack blog written in Python taking advantage of Flask and Jinja for framework and templating, Werkzeug
        for password authentication, and SQLAlchemy for data storage
      </p>

      <p className={styles.projectTitle} onClick={() => window.open('https://github.com/Tasselled/CallStack')}>
        CallStack
      </p>
      <p className={styles.description}>
        Created by developers for developers. A community for everyone who ♥ code. Learn together, grow together.
      </p>

      <p
        className={styles.projectTitle}
        onClick={() => window.open('https://github.com/kfan1/scratch_project_code_snippets')}>
        Code Snippets
      </p>
      <p className={styles.description}>
        Iteration of Code Snippets, an application to create, test, and save your most commonly used snippets of code
        for future reference and use.
      </p>
    </div>
  );
}
