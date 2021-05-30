import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";

import styles from "../../styles/components/Services.module.css";

function Services({ unmount }) {
  const [serviceName, setServiceName] = useState("");
  const [province, setProvince] = useState("");
  const [servicePoint, setServicePoint] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [months, setMonths] = useState({});

  const [cookies] = useCookies(["token"]);

  async function createNewService() {
    try {
      await api
        .post(
          "/services",
          {
            addresses: [
              {
                province: province.trim(),
                point: servicePoint.trim(),
                id: Math.random() * 100,
              },
            ],
            agency_owner: cookies.agency.trim(),
            months: ["Abril", "Março", "junho", "Agosto"],
            name: serviceName.trim(),
            end_hours: endHour.trim(),
            start_hours: startHour.trim(),
            on_weekends: false,
          },
          {
            Headers: {
              Authorization: "Bearer " + cookies.token,
            },
          }
        )
        .then(() => alert("Serviço criado!"));

      unmount();
    } catch (error) {
      alert("Error: " + error.message);
    }
  }

  return (
    <div className={styles.servicesContainer}>
      <main>
        <div className={styles.servicesLeft}>
          <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
            <strong>nome do service</strong>
            <input
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              type="text"
              placeholder="ex: nome service"
            />
          </div>

          <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
            <div>
              <h5>Endereço de serviço</h5>
            </div>

            <div className={styles.packetService}>
              <strong>província</strong>
              <input
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                type="text"
                name="tipo"
                placeholder="ex: luanda"
              />
            </div>

            <div className={styles.packetService}>
              <strong>ponto de atendimento</strong>
              <input
                value={servicePoint}
                onChange={(e) => setServicePoint(e.target.value)}
                type="text"
                name="tipo"
                placeholder="ex: UNASP centro hortolândia 183"
              />
            </div>
          </div>

          <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
            <div>
              <h5>Horário de atendimento</h5>
            </div>

            <div className={styles.packetService}>
              <strong>Hora que começa atendimento</strong>
              <input
                value={startHour}
                onChange={(e) => setStartHour(e.target.value)}
                type="text"
                name="tipo"
                placeholder="ex: 08:30"
              />
            </div>

            <div className={styles.packetService}>
              <strong>Termino do Horario</strong>
              <input
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                type="text"
                name="tipo"
                placeholder="ex: 18:00"
              />
            </div>
          </div>
        </div>

        <div className={styles.servicesRight}>
          <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
            <div id={styles.serviceMonth}>
              <strong>
                Mêses livre de atendimento <span>2021</span>
              </strong>

              <small>clique nos mesês para selecionar</small>
            </div>

            <div className={styles.monthsBlock}>
              <div className={`${styles.month} ${styles.clicked}`}>JANEIRO</div>
              <div className={styles.month}>FEVEREIRO</div>
              <div className={styles.month}>MARÇO</div>
              <div className={styles.month}>ABRIL</div>
              <div className={styles.month}>MAIO</div>
              <div className={`${styles.month} ${styles.clicked}`}>JUNHO</div>
              <div className={styles.month}>JULHO</div>
              <div className={`${styles.month} ${styles.clicked}`}>AGOSTO</div>
              <div className={styles.month}>SETEMBRO</div>
              <div className={`${styles.month} ${styles.clicked}`}>OUTUBRO</div>
              <div className={`${styles.month} ${styles.clicked}`}>
                NOVEMBRO
              </div>
              <div className={`${styles.month} ${styles.clicked}`}>
                DEZEMBRO
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footerContainer}>
        <button onClick={createNewService} type="button">
          Criar novo serviço
        </button>
      </footer>
    </div>
  );
}

export default Services;
