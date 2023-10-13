import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Profile = () => {
  return (
    <React.Fragment>
      <footer className={styles.profile}>
        <div className="containerMDX">
          <section>
            <h2>Iuri Silva</h2>

            <span>
              <Image src="/globe.svg" alt="Logo globe" width="56" height="56" />
              <h3>Guarantã, Brasil</h3>
            </span>

            <p>
              Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora). Sou
              freelancer como Frontend Developer e UI Designer desde 2020. Sou
              extremamente apaixonado por café e cultura japonesa.
            </p>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Profile;
