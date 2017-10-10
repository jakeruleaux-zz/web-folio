import React from 'react';
import styles from "./../styles/Footer.css";
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <div className={styles.footer}>
      <footer>
        <hr/>
        <Link to='/admin'>Admin</Link> 
        <div className={styles.right}>
          <p>©2017 Jacob Ruleaux</p>
        </div>

      </footer>
    </div>
  )
}

export default Footer;
