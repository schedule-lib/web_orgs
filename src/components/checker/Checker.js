import React, { useState } from "react";

import styles from "../../styles/components/Checker.module.css";

function Checker() {
  const [idProtocol, setIdProtocol] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  function handleVerify() {
    if (!idProtocol) {
      return alert("Insira um protocolo válido");
    }

    setIdProtocol(idProtocol);
    setIsVerifying(true);
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

      {isVerifying && (
        <div className={styles.protocol}>
          <div>
            <span>Horário agendado 👍</span>
          </div>

          <strong>protocolo: {idProtocol}</strong>
          <span>Usuário: elias alexandre</span>
          <span>Serviço: renovar BI</span>
          <span>Data/horário: 23/03/2021 - 12:30</span>
        </div>
      )}
    </div>
  );
}

export default Checker;
