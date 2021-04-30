import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/Login.module.css";

function Home() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/home", {
      username: "eliasallex",
    });
  }

  return (
    <div className={styles.container}>
      <h1>Serviço de Agendamento</h1>

      <form className={styles.form}>
        <div className={styles.group}>
          <label for="email">Identificador</label>
          <input
            type="email"
            placeholder="id"
            name="email"
            id="email"
            required
          />
        </div>

        <div className={styles.group}>
          <label>Senha secreta:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            name="password"
          />
          <br />
          <br />
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className={styles.default}
        >
          Entrar na Plataforma
        </button>
      </form>
    </div>
  );
}

export default Home;
