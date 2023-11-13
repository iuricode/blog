import React from "react";
import styles from "./styles.module.css";

const Profile = () => {
  return (
    <React.Fragment>
      <footer className={styles.profile}>
        <div className="containerMDX">
          <section>
            <h2>Konichiwa, sou Iuri Silva 👋🏼</h2>

            <span>
              <h3>Guarantã, Brasil</h3>
            </span>

            <p>
              Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora). Sou
              freelancer como Frontend Developer e UI Designer desde 2020,
              extremamente apaixonado por café e cultura japonesa.
            </p>
          </section>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Profile;
