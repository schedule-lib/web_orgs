import React, { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import api from "../services/api";

import Checker from "../components/checker/Checker";
import LogOut from "../components/LogOut";
import Services from "../components/services/Services";
import styles from "../styles/pages/Home.module.css";

function pages() {
  const [data, setData] = useState([]);
  const [isCreating, setIsCreating] = useState(true);

  const [cookies] = useCookies(["token"]);

  function handleCreateService() {
    setIsCreating(!isCreating);
  }

  const getDatas = useCallback(async () => {
    try {
      const response = await api.get(
        `/services/agencies/${String(cookies.agency).trim()}`,
        {
          Headers: {
            Authorization: "Bearer " + String(cookies.token),
          },
        }
      );

      const { data } = response;
      setData(data);
    } catch (error) {
      alert("Error: " + error.message);
    }
  }, [cookies]);

  useEffect(() => {
    getDatas();
  }, [cookies]);

  return (
    <div className={styles.container}>
      <aside>
        <h1>Serviço de agendamento</h1>

        <div className={styles.alreadyGroup}>
          <div className={styles.serverDone}>
            <h5>serviços existentes:</h5>
          </div>
          <ul className={styles.listAside}>
            {data.length >= 1 ? (
              data.map((service) => (
                <li key={service.id}>
                  <a href="#">{service.name}</a>
                </li>
              ))
            ) : (
              <h1>Comece criando novo serviço</h1>
            )}
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
