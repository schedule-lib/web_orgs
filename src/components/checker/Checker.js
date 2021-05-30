import React, { useState } from "react";
import { FiBook } from "react-icons/fi";
import api from "../../services/api";

import Loader from "../Loader";
import styles from "../../styles/components/Checker.module.css";

function Checker() {
  const [data, setData] = useState([]);
  const [idProtocol, setIdProtocol] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleVerify() {
    if (!idProtocol) {
      return alert("Insira um protocolo válido");
    }

    try {
      setIsLoading(true);
      const response = await api.get(`/scheduler/${String(idProtocol).trim()}`);
      const { data } = response;

      setData(data);
    } catch (error) {
      alert("Erro na conexão");
    }

    setIsLoading(false);
    setIsVerifying(true);
  }

  function ComponentVerification() {
    if (isVerifying && data.length >= 1) {
      return data.map((schedule) => (
        <div key={schedule.id} className={styles.protocol}>
          <div>
            <h1>Horário agendado</h1>
            <FiBook color="#5929cc" />
          </div>

          <strong>protocolo: {schedule.code}</strong>
          <span>Usuário: {schedule.username}</span>
          <span>Serviço: {schedule.service}</span>
          <span>
            Data/horário: {schedule.date} - {schedule.hour}
          </span>
        </div>
      ));
    }

    if (isVerifying) {
      return (
        <div className={styles.protocol}>
          <h1>Horário não agendado!</h1>
        </div>
      );
    }
  }

  return (
    <div className={styles.checkerContainer}>
      <span>Verificar se usuário fez o agendamento</span>

      <form className={styles.form}>
        <h4>Número do protocolo</h4>

        <div>
          <input
            type="text"
            name="protocol"
            id="protocol"
            value={idProtocol}
            onChange={(e) => setIdProtocol(e.target.value)}
          />

          <button onClick={handleVerify} type="button">
            verificar
          </button>
        </div>
      </form>

      {ComponentVerification()}

      {isLoading && <Loader />}
    </div>
  );
}

export default Checker;
