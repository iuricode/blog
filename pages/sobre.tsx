import React from "react";
import Link from "next/link";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";
import Head from "../src/infra/head";
import styles from "../styles/sobre.module.css";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head title="Blog | Iuri Silva - Sobre" />
      <div className="containerFlexBox">
        <Menu />
        <section className="containerMDX containerPadding">
          <div className={styles.about}>
            <h2>Hello World</h2>

            <p>
              Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora). Sou
              freelancer como Front-end developer e UI Designer desde 2020. Sou
              extremamente apaixonado por café e cultura japonesa.
            </p>

            <p>
              Minha primeira experiência com código foi na época em que todos
              tinham um Wix. Lembro-me de tentar encontrar uma maneira de mudar
              a cor de fundo e ter um texto chamativo. Eu costumava passar horas
              tentando personalizá-lo e nem conseguia ver o tempo passar. A
              emoção de ter o poder de estruturar páginas por conta própria foi
              incrível. É como lego. Você começa peça por peça, ninguém entende
              o que está construindo e pronto... você tem um castelo de códigos.
            </p>

            <p>
              Hoje você pode ver meu castelo de código através do meu{" "}
              <Link href="https://iuricode.com/" target="_blank">
                portfólio
              </Link>
              . Mas se sinta livre para conhecer minhas outras construções além
              do castelo:{" "}
              <Link href="https://www.instagram.com/iuricode/" target="_blank">
                Instagram
              </Link>
              ,{" "}
              <Link href="https://github.com/iuricode" target="_blank">
                GitHub
              </Link>
              ,{" "}
              <Link
                href="https://www.linkedin.com/in/iuricode/"
                target="_blank"
              >
                Linkedin
              </Link>{" "}
              e{" "}
              <Link href="https://discord.gg/wNCWTVuxyz" target="_blank">
                Discord
              </Link>
              .
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Sobre;
