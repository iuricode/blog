import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Publi = () => {
  return (
    <React.Fragment>
      <footer className={styles.publi}>
        <div className="containerMDX">
          <section>
            <h2>Aprenda desenvolvimento frontend</h2>

            <p>
              Este é um projeto gratuito para a comunidade de desenvolvedores,
              mas você pode me ajudar comprando o meu ebook se estiver
              interessado em aprender ou melhorar suas habilidades em
              desenvolvimento frontend.
            </p>

            <Link href="https://iuricode.com/efront/" target="_blank">
              Garantir agora
            </Link>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Publi;
