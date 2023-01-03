import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <div className="container">
          <section>
            <p>
              Copyright © 2023
              <Link href="https://iuricode.com" target="_blank">
                iuricode.com.
              </Link>
              Todos os direitos reservados.
            </p>

            <div>
              <p>Powered by</p>
              <Image
                src="/logo-iuricode.svg"
                alt="Logo iuricode"
                width="56"
                height="56"
              />
            </div>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
