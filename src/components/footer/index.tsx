import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div className="containerMDX">
          <section>
            <p>
              © 2022
              <Link href="https://iuricode.com" target="_blank">
                iuricode.com
              </Link>
            </p>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
