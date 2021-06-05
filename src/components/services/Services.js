import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../services/api";

import { transformIDInMonthName } from "../../utils";

import styles from "../../styles/components/Services.module.css";

function Services({ unmount }) {
  const [serviceName, setServiceName] = useState("");
  const [province, setProvince] = useState("");
  const [servicePoint, setServicePoint] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [months, setMonths] = useState([]);
  const [totalPeople, setTotalPeople] = useState(0);

  const [cookies] = useCookies(["token"]);

  async function createNewService() {
    if (
      !serviceName ||
      !province ||
      !servicePoint ||
      !startHour ||
      !endHour ||
      !months ||
      !totalPeople
    )
      return alert("Preencha todos os campo!");

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
            months: transformIDInMonthName(months),
            name: serviceName.trim(),
            end_hours: endHour.trim(),
            start_hours: startHour.trim(),
            on_weekends: false,
            total_people: totalPeople,
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
  function monthIsSelected(monthKey) {
    return months.includes(monthKey);
  }
  function handleMonthSelection(monthKey) {
    if (monthIsSelected(monthKey)) {
      const newMonths = months.filter((element) => element !== monthKey);
      setMonths(newMonths);
      return;
    }

    setMonths((months) => [...months, monthKey]);
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
                required
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
                type="time"
                name="init"
                placeholder="ex: 08:30"
                required
              />
            </div>

            <div className={styles.packetService}>
              <strong>Termino do Horario</strong>
              <input
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                type="time"
                name="end"
                placeholder="ex: 18:00"
                required
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
              <div
                onClick={() => handleMonthSelection(0)}
                className={`${styles.month} ${
                  monthIsSelected(0) ? styles.clicked : ""
                }`}
              >
                JANEIRO
              </div>
              <div
                onClick={() => handleMonthSelection(1)}
                className={`${styles.month} ${
                  monthIsSelected(1) ? styles.clicked : ""
                }`}
              >
                FEVEREIRO
              </div>
              <div
                onClick={() => handleMonthSelection(2)}
                className={`${styles.month} ${
                  monthIsSelected(2) ? styles.clicked : ""
                }`}
              >
                MARÇO
              </div>
              <div
                onClick={() => handleMonthSelection(3)}
                className={`${styles.month} ${
                  monthIsSelected(3) ? styles.clicked : ""
                }`}
              >
                ABRIL
              </div>
              <div
                onClick={() => handleMonthSelection(4)}
                className={`${styles.month} ${
                  monthIsSelected(4) ? styles.clicked : ""
                }`}
              >
                MAIO
              </div>
              <div
                onClick={() => handleMonthSelection(5)}
                className={`${styles.month} ${
                  monthIsSelected(5) ? styles.clicked : ""
                }`}
              >
                JUNHO
              </div>
              <div
                onClick={() => handleMonthSelection(6)}
                className={`${styles.month} ${
                  monthIsSelected(6) ? styles.clicked : ""
                }`}
              >
                JULHO
              </div>
              <div
                onClick={() => handleMonthSelection(7)}
                className={`${styles.month} ${
                  monthIsSelected(7) ? styles.clicked : ""
                }`}
              >
                AGOSTO
              </div>
              <div
                onClick={() => handleMonthSelection(8)}
                className={`${styles.month} ${
                  monthIsSelected(8) ? styles.clicked : ""
                }`}
              >
                SETEMBRO
              </div>
              <div
                onClick={() => handleMonthSelection(9)}
                className={`${styles.month} ${
                  monthIsSelected(9) ? styles.clicked : ""
                }`}
              >
                OUTUBRO
              </div>
              <div
                onClick={() => handleMonthSelection(10)}
                className={`${styles.month} ${
                  monthIsSelected(10) ? styles.clicked : ""
                }`}
              >
                NOVEMBRO
              </div>
              <div
                onClick={() => handleMonthSelection(11)}
                className={`${styles.month} ${
                  monthIsSelected(11) ? styles.clicked : ""
                }`}
              >
                DEZEMBRO
              </div>
            </div>
          </div>

          <div className={`${styles.serviceBlock} ${styles.panelShadow}`}>
            <div>
              <h5>Marcação</h5>
            </div>

            <div className={styles.packetService}>
              <strong>Total de pessoas por dia</strong>
              <input
                value={totalPeople}
                onChange={(e) => setTotalPeople(e.target.value)}
                type="number"
                min="1"
                max="100"
                name="total_people"
                className={styles.defaultNumber}
                required
              />
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
