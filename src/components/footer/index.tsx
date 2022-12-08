import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div className="container">
          <section>
            <p>
              Copyright © 2022
              <Link href="https://iuricode.com" target="_blank">
                iuricode.com.
              </Link>
              Todos os direitos reservados.
            </p>

            <div>
              <p>Powered by</p>
              <img src="/logo-iuricode.svg" alt="Logo iuricode" />
            </div>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
