import React, { useState } from "react";
import api from "../../services/api";

import styles from "../../styles/components/Checker.module.css";

function Checker() {
  const [data, setData] = useState([]);
  const [idProtocol, setIdProtocol] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  async function handleVerify() {
    if (!idProtocol) {
      return alert("Insira um protocolo válido");
    }

    try {
      const response = await api.get(`/scheduler/${String(idProtocol).trim()}`);
      const { data } = response;

      setData(data);
    } catch (error) {
      alert("Erro na conexão");
    }

    setIsVerifying(true);
  }

  function ComponentVerification() {
    if (isVerifying && data.length >= 1) {
      return data.map((schedule) => (
        <div key={schedule.id} className={styles.protocol}>
          <div>
            <span>Horário agendado 👍</span>
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
    </div>
  );
}

export default Checker;
