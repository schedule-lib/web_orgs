import React from "react";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Serviço de Agendamento</h1>

      <form className={styles.form} action="/home.html">
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

        <button type="submit" className={styles.default}>
          Entrar na Plataforma
        </button>
      </form>
    </div>
  );
}

export default Home;
