import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const Menu = () => {
  return (
    <header className={styles.containerMenu}>
      <div className="container">
        <div className={styles.containerNav}>
          <div className={styles.profileMenu}>
            <Image
              src="/iuricode.jpg"
              alt="Foto ilustrativa do iuricode"
              width="720"
              height="400"
            />
            <h2>Blog | Iuri Silva</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="https://www.iuricode.com/efront/" target="_blank">
                  Ebook
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
