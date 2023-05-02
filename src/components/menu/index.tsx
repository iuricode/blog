import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Menu = () => {
  return (
    <header className={styles.containerMenu}>
      <div className="container">
        <div className={styles.containerNav}>
          <div className={styles.profileMenu}>
            <h2>iuricode</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">blog</Link>
              </li>
              <li>
                <Link href="/sobre">sobre</Link>
              </li>
              <li>
                <Link href="/setup">setup</Link>
              </li>
              <li>
                <Link href="https://www.iuricode.com/efront/" target="_blank">
                  ebook
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
