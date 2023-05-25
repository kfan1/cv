import React from "react";
import styles from './footerStyles.module.scss'

export default function footer(){
  return (
    <div className={styles.footer}>
      <p>©2023 <span className={styles.heart}>♥</span> Kevin Fan</p>
    </div>
  )
}