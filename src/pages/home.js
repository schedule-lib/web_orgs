import React, { useState } from "react";
import Checker from "../components/checker/Checker";
import LogOut from "../components/LogOut";

// COMPONENTS
import Services from "../components/services/Services";

// Statics
import styles from "../styles/pages/Home.module.css";

function pages() {
  const [isCreating, setIsCreating] = useState(true);

  function handleCreateService() {
    setIsCreating(!isCreating);
  }

  return (
    <div className={styles.container}>
      <aside>
        <h1>Serviço de agendamento</h1>

        <div className={styles.alreadyGroup}>
          <div className={styles.serverDone}>
            <h5>serviços existentes:</h5>
          </div>
          <ul className={styles.listAside}>
            <li>
              <a href="#">criar novo</a>
            </li>
            <li>
              <a href="#">alterar cartao</a>
            </li>
            <li>
              <a href="#">falar com agencia</a>
            </li>
          </ul>
        </div>

        <button
          onClick={handleCreateService}
          type="button"
          className={styles.default}
        >
          novo serviço
        </button>
      </aside>

      <article className={styles.rightContainer}>
        <div className={styles.agencyHeader}>
          <h4>Agência bancaria AOA</h4>
          <div>
            <LogOut />
          </div>
        </div>

        {isCreating ? <Checker /> : <Services unmount={handleCreateService} />}
      </article>
    </div>
  );
}

export default pages;
